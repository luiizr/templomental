import "server-only";

import type { RepositorioDeSantuarios, Santuario } from "@/dominio/santuarios/santuario";

export class ListarSantuariosDoDashboard {
  constructor(private readonly repositorio: RepositorioDeSantuarios) {}

  async executar(usuarioId: string): Promise<Santuario[]> {
    return this.repositorio.listarParaDashboard(usuarioId);
  }
}
