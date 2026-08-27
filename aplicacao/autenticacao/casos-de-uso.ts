import {
  ErroDeEmailDeUsuarioDuplicado,
  type CriptografadorDeSenha,
  type RepositorioDeUsuarios,
  type Usuario,
} from "@/dominio/usuarios/usuario";
import type { NovoPapel, RepositorioDePapeis } from "@/dominio/papeis/papel";

export class ErroDeValidacao extends Error {
  constructor(
    public readonly errosPorCampo: Partial<
      Record<"nome" | "email" | "senha", string>
    >,
  ) {
    super("Dados inválidos.");
  }
}

export class ErroDeEmailJaCadastrado extends Error {
  constructor() {
    super("Este e-mail já está cadastrado.");
  }
}

export class ErroDeCredenciaisInvalidas extends Error {
  constructor() {
    super("E-mail ou senha inválidos.");
  }
}

export class CadastrarUsuario {
  constructor(
    private readonly repositorio: RepositorioDeUsuarios,
    private readonly repositorioDePapeis: RepositorioDePapeis,
    private readonly criptografador: CriptografadorDeSenha,
  ) {}

  async executar(entrada: {
    nome: string;
    email: string;
    senha: string;
  }): Promise<Usuario> {
    const dados = validarCadastro(entrada);
    if (await this.repositorio.buscarPorEmail(dados.email)) {
      throw new ErroDeEmailJaCadastrado();
    }

    const idDoUsuario = crypto.randomUUID();

    try {
      const papel = await this.repositorioDePapeis.criar(
        idDoUsuario,
        atribuirPapel(),
      );
      const usuario: Usuario = {
        id: idDoUsuario,
        nome: dados.nome,
        email: dados.email,
        senhaCriptografada: await this.criptografador.criptografar(dados.senha),
        criadoEm: new Date(),
        atualizadoEm: new Date(),
        ativo: true,
        idPapel: papel.id,
      };

      await this.repositorio.salvar(usuario);
      return usuario;
    } catch (erro) {
      if (erro instanceof ErroDeEmailDeUsuarioDuplicado) {
        throw new ErroDeEmailJaCadastrado();
      }

      throw erro;
    }
  }
}

export function atribuirPapel(agora = new Date()): NovoPapel {
  return {
    permissoes: {
      limiteProjetos: 5,
      limiteGerar: 2,
      resetDiarioGerar: adicionarDias(agora, 1).toISOString(),
      resetSemanalProjetos: adicionarDias(agora, 7).toISOString(),
      tema: "sistema",
      recursos: ["criar", "compartilhar", "excluir", "gerar", "criacaoCompartilhada"],
    },
    criadoEm: agora,
    atualizadoEm: agora,
  };
}

export class AutenticarUsuario {
  constructor(
    private readonly repositorio: RepositorioDeUsuarios,
    private readonly criptografador: CriptografadorDeSenha,
  ) {}

  async executar(entrada: { email: string; senha: string }): Promise<Usuario> {
    const usuario = await this.repositorio.buscarPorEmail(
      entrada.email.trim().toLowerCase(),
    );
    if (!usuario) throw new ErroDeCredenciaisInvalidas();

    const senhaCorreta = await this.criptografador.comparar(
      entrada.senha,
      usuario.senhaCriptografada,
    );
    if (!senhaCorreta) throw new ErroDeCredenciaisInvalidas();

    return usuario;
  }
}

function validarCadastro(entrada: { nome: string; email: string; senha: string }) {
  const nome = entrada.nome.trim();
  const email = entrada.email.trim().toLowerCase();
  const erros: ErroDeValidacao["errosPorCampo"] = {};

  if (nome.length < 2) erros.nome = "Informe um nome com pelo menos 2 caracteres.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.email = "Informe um e-mail válido.";
  if (entrada.senha.length < 8) erros.senha = "A senha deve ter pelo menos 8 caracteres.";
  if (Object.keys(erros).length > 0) throw new ErroDeValidacao(erros);

  return { nome, email, senha: entrada.senha };
}

function adicionarDias(data: Date, dias: number): Date {
  const proximaData = new Date(data);
  proximaData.setDate(proximaData.getDate() + dias);
  return proximaData;
}
