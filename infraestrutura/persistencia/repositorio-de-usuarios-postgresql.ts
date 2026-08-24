import "server-only";

import type { Pool } from "pg";

import {
  ErroDeEmailDeUsuarioDuplicado,
  type RepositorioDeUsuarios,
  type Usuario,
} from "@/dominio/usuarios/usuario";

type RegistroDeUsuario = {
  id: string;
  nome: string;
  email: string;
  senha_criptografada: string;
  criado_em: Date;
  atualizado_em: Date;
  ativo: boolean;
};

export class RepositorioDeUsuariosPostgreSQL implements RepositorioDeUsuarios {
  constructor(private readonly pool: Pool) {}

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const resultado = await this.pool.query<RegistroDeUsuario>(
      `SELECT
         id,
         nome,
         email,
         senha_criptografada,
         criado_em,
         atualizado_em,
         ativo
       FROM usuarios
       WHERE email = $1
       LIMIT 1`,
      [email.trim().toLowerCase()],
    );

    return resultado.rows[0] ? paraUsuario(resultado.rows[0]) : null;
  }

  async buscarPorId(id: string): Promise<Usuario | null> {
    const resultado = await this.pool.query<RegistroDeUsuario>(
      `SELECT
         id,
         nome,
         email,
         senha_criptografada,
         criado_em,
         atualizado_em,
         ativo
       FROM usuarios
       WHERE id = $1
       LIMIT 1`,
      [id],
    );

    return resultado.rows[0] ? paraUsuario(resultado.rows[0]) : null;
  }

  async salvar(usuario: Usuario): Promise<void> {
    try {
      await this.pool.query(
        `INSERT INTO usuarios (
           id,
           nome,
           email,
           senha_criptografada,
           criado_em,
           atualizado_em,
           ativo
         )
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (id) DO UPDATE SET
           nome = EXCLUDED.nome,
           email = EXCLUDED.email,
           senha_criptografada = EXCLUDED.senha_criptografada,
           atualizado_em = EXCLUDED.atualizado_em,
           ativo = EXCLUDED.ativo`,
        [
          usuario.id,
          usuario.nome,
          usuario.email.trim().toLowerCase(),
          usuario.senhaCriptografada,
          usuario.criadoEm,
          usuario.atualizadoEm,
          usuario.ativo,
        ],
      );
    } catch (erro) {
      if (emailDuplicado(erro)) {
        throw new ErroDeEmailDeUsuarioDuplicado();
      }

      throw erro;
    }
  }
}

function paraUsuario(registro: RegistroDeUsuario): Usuario {
  return {
    id: registro.id,
    nome: registro.nome,
    email: registro.email,
    senhaCriptografada: registro.senha_criptografada,
    criadoEm: registro.criado_em,
    atualizadoEm: registro.atualizado_em,
    ativo: registro.ativo,
  };
}

function emailDuplicado(erro: unknown): boolean {
  return (
    erro instanceof Error &&
    "code" in erro &&
    erro.code === "23505" &&
    "constraint" in erro &&
    erro.constraint === "usuarios_email_unico_idx"
  );
}
