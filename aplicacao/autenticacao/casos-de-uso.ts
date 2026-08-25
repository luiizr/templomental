import {
  ErroDeEmailDeUsuarioDuplicado,
  type CriptografadorDeSenha,
  type RepositorioDeUsuarios,
  type Usuario,
} from "@/dominio/usuarios/usuario";

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

    const usuario: Usuario = {
      id: crypto.randomUUID(),
      nome: dados.nome,
      email: dados.email,
      senhaCriptografada: await this.criptografador.criptografar(dados.senha),
      criadoEm: new Date(),
      atualizadoEm: new Date(),
      ativo: true,
    };

    try {
      await this.repositorio.salvar(usuario);
    } catch (erro) {
      if (erro instanceof ErroDeEmailDeUsuarioDuplicado) {
        throw new ErroDeEmailJaCadastrado();
      }

      throw erro;
    }

    return usuario;
  }
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
