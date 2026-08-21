"use server";

import { redirect } from "next/navigation";

import {
  ErroDeCredenciaisInvalidas,
  ErroDeEmailJaCadastrado,
  ErroDeValidacao,
} from "@/aplicacao/autenticacao/casos-de-uso";
import { autenticarUsuario, cadastrarUsuario } from "@/infraestrutura/composicao/autenticacao";
import { criarSessao, encerrarSessao } from "@/infraestrutura/sessao/gerenciador-de-sessao";

export type EstadoDaAutenticacao = {
  erros: Partial<Record<"nome" | "email" | "senha", string>>;
  mensagem?: string;
};

export const estadoInicialDaAutenticacao: EstadoDaAutenticacao = { erros: {} };

export async function cadastrar(
  _estadoAnterior: EstadoDaAutenticacao,
  formulario: FormData,
): Promise<EstadoDaAutenticacao> {
  try {
    const usuario = await cadastrarUsuario.executar({
      nome: String(formulario.get("nome") ?? ""),
      email: String(formulario.get("email") ?? ""),
      senha: String(formulario.get("senha") ?? ""),
    });
    await criarSessao(usuario.id);
  } catch (erro) {
    return transformarErro(erro);
  }

  redirect("/dashboard");
}

export async function entrar(
  _estadoAnterior: EstadoDaAutenticacao,
  formulario: FormData,
): Promise<EstadoDaAutenticacao> {
  try {
    const usuario = await autenticarUsuario.executar({
      email: String(formulario.get("email") ?? ""),
      senha: String(formulario.get("senha") ?? ""),
    });
    await criarSessao(usuario.id);
  } catch (erro) {
    return transformarErro(erro);
  }

  redirect("/dashboard");
}

export async function sair(): Promise<never> {
  await encerrarSessao();
  redirect("/");
}

function transformarErro(erro: unknown): EstadoDaAutenticacao {
  if (erro instanceof ErroDeValidacao) return { erros: erro.errosPorCampo };
  if (erro instanceof ErroDeEmailJaCadastrado) return { erros: { email: erro.message } };
  if (erro instanceof ErroDeCredenciaisInvalidas) return { erros: {}, mensagem: erro.message };
  return { erros: {}, mensagem: "Não foi possível concluir a operação. Tente novamente." };
}
