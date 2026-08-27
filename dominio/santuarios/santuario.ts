export type Santuario = {
  id: string;
  titulo: string;
  descricao: string;
  categoria: "Pasta" | "Estratégia" | "Esboço";
  destaque: string;
  atualizadoEmTexto: string;
};

export interface RepositorioDeSantuarios {
  listarParaDashboard(usuarioId: string): Promise<Santuario[]>;
}
