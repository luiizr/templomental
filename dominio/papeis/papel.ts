export type PermissoesDoPapel = Record<string, unknown>;

export type NovoPapel = {
  permissoes: PermissoesDoPapel;
  criadoEm: Date;
  atualizadoEm: Date;
};

export type Papel = NovoPapel & {
  id: string;
};

export interface RepositorioDePapeis {
  buscarPorIdDoUsuario(idDoUsuario: string): Promise<Papel | null>;
  criar(idDoUsuario: string, papel: NovoPapel): Promise<Papel>;
  editarPapel(id: string, permissoes: PermissoesDoPapel): Promise<boolean>;
  salvar(papel: Papel): Promise<void>;
}
