import "server-only";

import type { Pool } from "pg";

import type {
  NovoPapel,
  Papel,
  PermissoesDoPapel,
  RepositorioDePapeis,
} from "@/dominio/papeis/papel";

type RegistroDePapel = {
  id: string;
  permissoes: PermissoesDoPapel;
  criado_em: Date;
  atualizado_em: Date;
};

export class RepositorioDePapeisPostgreSQL implements RepositorioDePapeis {
  constructor(private readonly pool: Pool) {}

  async buscarPorIdDoUsuario(idDoUsuario: string): Promise<Papel | null> {
    const resultado = await this.pool.query<RegistroDePapel>(
      `SELECT
         papeis.id,
         papeis.permissoes,
         papeis.criado_em,
         papeis.atualizado_em
       FROM papeis
       INNER JOIN usuarios ON usuarios.id_papel = papeis.id
       WHERE usuarios.id = $1
       LIMIT 1`,
      [idDoUsuario],
    );

    return resultado.rows[0] ? paraPapel(resultado.rows[0]) : null;
  }

  async criar(idDoUsuario: string, papel: NovoPapel): Promise<Papel> {
    void idDoUsuario;

    const resultado = await this.pool.query<RegistroDePapel>(
      `INSERT INTO papeis (permissoes, criado_em, atualizado_em)
       VALUES ($1::jsonb, $2, $3)
       RETURNING id, permissoes, criado_em, atualizado_em`,
      [
        JSON.stringify(papel.permissoes),
        papel.criadoEm,
        papel.atualizadoEm,
      ],
    );

    return paraPapel(resultado.rows[0]);
  }

  async editarPapel(
    id: string,
    permissoes: PermissoesDoPapel,
  ): Promise<boolean> {
    const resultado = await this.pool.query(
      `UPDATE papeis
       SET permissoes = $2::jsonb,
           atualizado_em = CURRENT_TIMESTAMP
       WHERE id = $1`,
      [id, JSON.stringify(permissoes)],
    );

    return resultado.rowCount === 1;
  }

  async salvar(papel: Papel): Promise<void> {
    await this.pool.query(
      `UPDATE papeis
       SET permissoes = $2::jsonb,
           atualizado_em = $3
       WHERE id = $1`,
      [
        papel.id,
        JSON.stringify(papel.permissoes),
        papel.atualizadoEm,
      ],
    );
  }
}

function paraPapel(registro: RegistroDePapel): Papel {
  return {
    id: registro.id,
    permissoes: registro.permissoes,
    criadoEm: registro.criado_em,
    atualizadoEm: registro.atualizado_em,
  };
}
