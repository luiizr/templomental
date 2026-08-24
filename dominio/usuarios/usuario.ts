export type Usuario = {
  id: string;
  nome: string;
  email: string;
  senhaCriptografada: string;
  criadoEm: Date;
  atualizadoEm: Date;
  ativo: boolean;
};

// Criação dos repositórios e interfaces de auxílio para manipulação de usuários coisas que tenham haver com ele.
export interface RepositorioDeUsuarios {
  buscarPorEmail(email: string): Promise<Usuario | null>;
  buscarPorId(id: string): Promise<Usuario | null>;
  salvar(usuario: Usuario): Promise<void>;
}

export interface CriptografadorDeSenha {
  comparar(senha: string, senhaCriptografada: string): Promise<boolean>;
  criptografar(senha: string): Promise<string>;
}