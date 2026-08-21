export type Usuario = {
  id: string;
  nome: string;
  email: string;
  senhaCriptografada: string;
  criadoEm: Date;
};

export interface RepositorioDeUsuarios {
  buscarPorEmail(email: string): Promise<Usuario | null>;
  buscarPorId(id: string): Promise<Usuario | null>;
  salvar(usuario: Usuario): Promise<void>;
}

export interface CriptografadorDeSenha {
  comparar(senha: string, senhaCriptografada: string): Promise<boolean>;
  criptografar(senha: string): Promise<string>;
}
