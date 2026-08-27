import type {
  NovoPapel,
  Papel,
  RepositorioDePapeis,
} from "@/dominio/papeis/papel";

export class RepositorioDePapeisEmMemoria implements RepositorioDePapeis {
  private readonly papeis = new Map<string, Papel>();
  private readonly idDoPapelPorIdDoUsuario = new Map<string, string>();

  async buscarPorIdDoUsuario(idDoUsuario: string): Promise<Papel | null> {
    const idDoPapel = this.idDoPapelPorIdDoUsuario.get(idDoUsuario);
    return idDoPapel ? this.papeis.get(idDoPapel) ?? null : null;
  }

  async criar(idDoUsuario: string, papel: NovoPapel): Promise<Papel> {
    const papelCriado: Papel = { ...papel, id: crypto.randomUUID() };
    this.papeis.set(papelCriado.id, papelCriado);
    this.idDoPapelPorIdDoUsuario.set(idDoUsuario, papelCriado.id);

    return papelCriado;
  }

  async editarPapel(
    id: string,
    permissoes: Papel["permissoes"],
  ): Promise<boolean> {
    const papel = this.papeis.get(id);
    if (!papel) return false;

    this.papeis.set(id, {
      ...papel,
      permissoes,
      atualizadoEm: new Date(),
    });

    return true;
  }

  async salvar(papel: Papel): Promise<void> {
    this.papeis.set(papel.id, papel);
  }
}
