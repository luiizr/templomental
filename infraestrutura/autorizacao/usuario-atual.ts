import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";

import type { Usuario } from "@/dominio/usuarios/usuario";
import { repositorioDeUsuarios } from "@/infraestrutura/composicao/autenticacao";
import { obterSessao } from "@/infraestrutura/sessao/gerenciador-de-sessao";

export const obterUsuarioAtual = cache(async (): Promise<Usuario | null> => {
  const sessao = await obterSessao();
  return sessao ? repositorioDeUsuarios.buscarPorId(sessao.usuarioId) : null;
});

export async function exigirUsuarioAutenticado(): Promise<Usuario> {
  const usuario = await obterUsuarioAtual();
  if (!usuario) redirect("/");
  return usuario;
}
