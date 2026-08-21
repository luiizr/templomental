import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const nomeDoCookie = "sessao";
const duracaoEmSegundos = 60 * 60 * 24 * 7;

type ConteudoDaSessao = { usuarioId: string; expiraEm: number };

export async function criarSessao(usuarioId: string): Promise<void> {
  const conteudo = codificar({
    usuarioId,
    expiraEm: Math.floor(Date.now() / 1000) + duracaoEmSegundos,
  });

  (await cookies()).set(nomeDoCookie, assinar(conteudo), {
    httpOnly: true,
    maxAge: duracaoEmSegundos,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function obterSessao(): Promise<ConteudoDaSessao | null> {
  const valor = (await cookies()).get(nomeDoCookie)?.value;
  if (!valor) return null;

  const [conteudo, assinatura] = valor.split(".");
  if (!conteudo || !assinatura || !assinaturaValida(conteudo, assinatura)) return null;

  try {
    const sessao = JSON.parse(Buffer.from(conteudo, "base64url").toString("utf8")) as ConteudoDaSessao;
    return sessao.expiraEm > Math.floor(Date.now() / 1000) ? sessao : null;
  } catch {
    return null;
  }
}

export async function encerrarSessao(): Promise<void> {
  (await cookies()).delete(nomeDoCookie);
}

function assinar(conteudo: string): string {
  return `${conteudo}.${gerarAssinatura(conteudo)}`;
}

function assinaturaValida(conteudo: string, assinatura: string): boolean {
  const esperada = Buffer.from(gerarAssinatura(conteudo), "hex");
  const recebida = Buffer.from(assinatura, "hex");
  return esperada.length === recebida.length && timingSafeEqual(esperada, recebida);
}

function gerarAssinatura(conteudo: string): string {
  const segredo = process.env.SEGREDO_DA_SESSAO;
  if (!segredo) throw new Error("Defina SEGREDO_DA_SESSAO no arquivo .env.local.");
  return createHmac("sha256", segredo).update(conteudo).digest("hex");
}

function codificar(conteudo: ConteudoDaSessao): string {
  return Buffer.from(JSON.stringify(conteudo)).toString("base64url");
}
