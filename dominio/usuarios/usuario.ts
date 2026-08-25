export type Usuario = {
  id: string;
  nome: string;
  email: string;
  senhaCriptografada: string;
  criadoEm: Date;
  atualizadoEm: Date;
  ativo: boolean;
};

export class ErroDeEmailDeUsuarioDuplicado extends Error {
  constructor() {
    super("Já existe um usuário com este e-mail.");
  }
}

export interface RepositorioDeUsuarios {
  buscarPorEmail(email: string): Promise<Usuario | null>;
  buscarPorId(id: string): Promise<Usuario | null>;
  salvar(usuario: Usuario): Promise<void>;
}

export interface CriptografadorDeSenha {
  comparar(senha: string, senhaCriptografada: string): Promise<boolean>;
  criptografar(senha: string): Promise<string>;
}
