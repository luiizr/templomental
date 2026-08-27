"use client";

import { useActionState, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  cadastrar,
  entrar,
  type EstadoDaAutenticacao,
} from "@/app/_actions/autenticacao";

const estadoInicial: EstadoDaAutenticacao = { erros: {} };

type Modo = "entrar" | "cadastrar";

export function AcessoAoTemplo() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className="cursor-pointer rounded-full border border-white/70 bg-[#7f7062] px-4 py-1.5 text-[14px] font-medium text-white shadow-[0_10px_22px_rgba(82,67,55,0.18)] transition hover:bg-[#6c5f55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Comece →
      </button>

      {aberto
        ? createPortal(
            <ModalDeAutenticacao aoFechar={() => setAberto(false)} />,
            document.body,
          )
        : null}
    </>
  );
}
function ModalDeAutenticacao({ aoFechar }: { aoFechar: () => void }) {
  const [modo, setModo] = useState<Modo>("entrar");
  const [estadoEntrada, acaoEntrada, entrando] = useActionState(entrar, estadoInicial);
  const [estadoCadastro, acaoCadastro, cadastrando] = useActionState(cadastrar, estadoInicial);

  useEffect(() => {
    function fecharComEscape(evento: KeyboardEvent) {
      if (evento.key === "Escape") aoFechar();
    }

    document.addEventListener("keydown", fecharComEscape);
    return () => document.removeEventListener("keydown", fecharComEscape);
  }, [aoFechar]);

  const estado = modo === "entrar" ? estadoEntrada : estadoCadastro;
  const pendente = modo === "entrar" ? entrando : cadastrando;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#3e3731]/35 p-4 backdrop-blur-[3px]"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) aoFechar();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-autenticacao"
        className="cartao-de-autenticacao relative my-auto w-full max-w-[390px] rounded-[26px] border border-white/70 bg-[#f6eee8] shadow-[0_30px_90px_rgba(62,49,40,0.28)] [font-family:Arial,sans-serif]"
      >
        <div className="grid grid-cols-2 border-b border-[#d7cbc2] px-12">
          <Aba ativa={modo === "entrar"} aoClicar={() => setModo("entrar")}>
            Entrar
          </Aba>
          <Aba ativa={modo === "cadastrar"} aoClicar={() => setModo("cadastrar")}>
            Criar conta
          </Aba>
        </div>

        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar"
          className="absolute right-4 top-1 flex h-8 w-8 items-center justify-center rounded-full text-xl font-light text-[#6f6a66] transition hover:bg-white/60 hover:text-[#312b27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#64736e]"
        >
          ×
        </button>

        <div className="px-6 pb-5 pt-5 sm:px-7">
          <header className="mb-6 text-center">
            <h2
              id="titulo-autenticacao"
              className="font-[family-name:var(--font-display)] text-[31px] font-medium italic leading-none text-[#302824]"
            >
              Templo Mental
            </h2>
            <p className="mt-2 text-[14px] text-[#5f5a56]">
              {modo === "entrar"
                ? "Acesse seu santuário digital."
                : "Comece a organizar o que existe na sua mente."}
            </p>
          </header>

          <form action={modo === "entrar" ? acaoEntrada : acaoCadastro} className="space-y-4">
            {modo === "cadastrar" ? (
              <Campo
                nome="nome"
                rotulo="Nome"
                tipo="text"
                autoComplete="name"
                placeholder="Como podemos chamar você?"
                erro={estado.erros.nome}
                icone="usuario"
              />
            ) : null}

            <Campo
              nome="email"
              rotulo="Email"
              tipo="email"
              autoComplete="email"
              placeholder="seu@email.com"
              erro={estado.erros.email}
              icone="email"
            />

            <Campo
              nome="senha"
              rotulo="Senha"
              tipo="password"
              autoComplete={modo === "entrar" ? "current-password" : "new-password"}
              placeholder={modo === "entrar" ? "••••••••" : "Mínimo de 8 caracteres"}
              erro={estado.erros.senha}
              icone="senha"
            />

            {modo === "entrar" ? ( 
              <div className="-mt-3 text-right">
                <span className="text-[12px] text-[#77716c]">Esqueceu a senha?</span>
              </div>
            ) : null}

            {estado.mensagem ? (
              <p
                role="alert"
                className="rounded-xl border border-[#c89185]/35 bg-[#fff7f4] px-3 py-2 text-center text-[12px] leading-5 text-[#9a4f41]"
              >
                {estado.mensagem}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={pendente}
              className="mt-2 w-full rounded-full bg-[#60716c] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_22px_rgba(72,87,82,0.22)] transition hover:bg-[#52625d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#60716c] disabled:cursor-wait disabled:opacity-65"
            >
              {pendente
                ? "Aguarde..."
                : modo === "entrar"
                  ? "Entrar no Templo"
                  : "Criar meu santuário"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-wide text-[#716c68]">
            <span className="h-px flex-1 bg-[#d8cdc5]" />
            ou continue com
            <span className="h-px flex-1 bg-[#d8cdc5]" />
          </div>

          <div className="space-y-2">
            <BotaoSocial provedor="Google" />
            <BotaoSocial provedor="Apple" />
          </div>

          <p className="mt-3 text-center text-[10px] text-[#8b8580]">
            Google e Apple estarão disponíveis em breve.
          </p>

        </div>
      </section>
    </div>
  );
}

function Aba({
  ativa,
  aoClicar,
  children,
}: {
  ativa: boolean;
  aoClicar: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      className={`relative h-10 whitespace-nowrap text-[12px] font-semibold tracking-wide transition ${
        ativa ? "text-[#53635f]" : "text-[#605b57] hover:text-[#302b28]"
      }`}
    >
      {children}
      {ativa ? <span className="absolute inset-x-0 bottom-0 h-px bg-[#53635f]" /> : null}
    </button>
  );
}

function Campo({
  nome,
  rotulo,
  tipo,
  autoComplete,
  placeholder,
  erro,
  icone,
}: {
  nome: "nome" | "email" | "senha";
  rotulo: string;
  tipo: "text" | "email" | "password";
  autoComplete: string;
  placeholder: string;
  erro?: string;
  icone: "usuario" | "email" | "senha";
}) {
  const id = `autenticacao-${nome}`;

  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-[12px] font-semibold text-[#625d59]">{rotulo}</span>
      <span
        className={`flex items-center gap-2 border-b pb-2 transition focus-within:border-[#61716c] ${
          erro ? "border-[#b86c5d]" : "border-[#d4cac2]"
        }`}
      >
        <IconeDeCampo tipo={icone} />
        <input
          id={id}
          name={nome}
          type={tipo}
          required
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={Boolean(erro)}
          aria-describedby={erro ? `${id}-erro` : undefined}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-[#342e2a] outline-none placeholder:text-[#aaa5a1]"
        />
      </span>
      {erro ? (
        <span id={`${id}-erro`} role="alert" className="mt-1.5 block text-[11px] text-[#a65345]">
          {erro}
        </span>
      ) : null}
    </label>
  );
}

function IconeDeCampo({ tipo }: { tipo: "usuario" | "email" | "senha" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[#b4b0ac]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tipo === "email" ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      ) : tipo === "senha" ? (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
      ) : (
        <>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20a7 7 0 0 1 14 0" />
        </>
      )}
    </svg>
  );
}

function BotaoSocial({ provedor }: { provedor: "Google" | "Apple" }) {
  return (
    <button
      type="button"
      disabled
      aria-label={`${provedor}, disponível em breve`}
      className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-full border border-[#ddd3cc] bg-white/65 px-5 py-3 text-[12px] font-semibold tracking-wide text-[#45403c] opacity-75"
    >
      {provedor === "Google" ? (
        <span className="text-[18px] font-bold text-[#4285f4]">G</span>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] fill-[#24211f]">
          <path d="M17.1 12.6c0-2.7 2.2-4 2.3-4.1a5 5 0 0 0-4-2.2c-1.7-.2-3.3 1-4.1 1-.9 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.6 2.8-2 3.5-.5 8.7 1.4 11.5 1 1.4 2.1 3 3.6 2.9 1.4-.1 2-1 3.7-1s2.2 1 3.7 1c1.5 0 2.5-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3.5-1.4-3.5-4.8ZM14.3 4.5A4.7 4.7 0 0 0 15.4 1a4.9 4.9 0 0 0-3.2 1.7A4.5 4.5 0 0 0 11 6.1a4 4 0 0 0 3.3-1.6Z" />
        </svg>
      )}
      {provedor}
    </button>
  );
}

