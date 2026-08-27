import "server-only";

import type { RepositorioDeSantuarios, Santuario } from "@/dominio/santuarios/santuario";

const santuarioDeExemplo: Santuario = {
  id: "santuario-exemplo-1",
  titulo: "Estratégias 2024",
  descricao: "Coleção de mapas estratégicos e diretrizes para o ciclo anual.",
  categoria: "Pasta",
  destaque: "12 projetos",
  atualizadoEmTexto: "Atualizado hoje",
};

export class RepositorioDeSantuariosEmMemoria implements RepositorioDeSantuarios {
  async listarParaDashboard(usuarioId: string): Promise<Santuario[]> {
    void usuarioId;
    return [santuarioDeExemplo];
  }
}
