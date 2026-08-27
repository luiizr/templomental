import Link from "next/link";

import { sair } from "@/app/_actions/autenticacao";
import { IconeWorkspace } from "@/app/_components/workspace/icone-workspace";

type BarraLateralWorkspaceProps = {
  nomeDoUsuario: string;
};

const navegacaoPrincipal = [
  { href: "/dashboard", rotulo: "Overview", icone: "dashboard" as const, ativa: true },
  { href: "#nodes", rotulo: "Nodes", icone: "projeto" as const },
  { href: "#connections", rotulo: "Connections", icone: "conexoes" as const },
  { href: "#archives", rotulo: "Archives", icone: "arquivo" as const },
];

const navegacaoSecundaria = [
  { href: "#settings", rotulo: "Settings", icone: "ajustes" as const },
  { href: "#support", rotulo: "Support", icone: "suporte" as const },
];

export function BarraLateralWorkspace({
  nomeDoUsuario,
}: BarraLateralWorkspaceProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 shrink-0 border-r border-[#d9d0ca] bg-[#fff8f4] px-3 py-5 md:flex md:flex-col xl:w-60">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="font-[family-name:var(--font-display)] text-[28px] leading-none text-[#53615c]"
        >
          Templo Mental
        </Link>

        <div className="mt-6 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d2c7bf] bg-[#f4ece6] text-[#7a7168]">
            <IconeWorkspace nome="perfil" className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-[#84786d]">
              Project Workspace
            </p>
            <p className="truncate text-[13px] text-[#5b514a]">{nomeDoUsuario}</p>
          </div>
        </div>
      </div>

      <nav aria-label="Navegação principal do workspace" className="flex flex-1 flex-col gap-1">
        {navegacaoPrincipal.map((item) => (
          <Link
            key={item.rotulo}
            href={item.href}
            aria-current={item.ativa ? "page" : undefined}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition ${
              item.ativa
                ? "translate-x-1 bg-[#e9e2d4] text-[#625e54]"
                : "text-[#7c746d] hover:bg-[#f5ece7] hover:text-[#53615c]"
            }`}
          >
            <IconeWorkspace nome={item.icone} className="h-4 w-4" />
            <span className="font-semibold tracking-[0.04em]">{item.rotulo}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#53615c] px-3 py-2.5 text-[12px] font-semibold tracking-[0.05em] text-white shadow-[0_12px_24px_rgba(83,97,92,0.14)] transition hover:bg-[#47534f]"
        >
          <IconeWorkspace nome="gerar" className="h-4 w-4" />
          Gerar
        </button>

        <div className="h-px bg-[#ddd3cc]" />

        <nav aria-label="Links auxiliares" className="flex flex-col gap-1">
          {navegacaoSecundaria.map((item) => (
            <Link
              key={item.rotulo}
              href={item.href}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] text-[#7c746d] transition hover:bg-[#f5ece7] hover:text-[#53615c]"
            >
              <IconeWorkspace nome={item.icone} className="h-4 w-4" />
              <span className="font-semibold tracking-[0.04em]">{item.rotulo}</span>
            </Link>
          ))}
        </nav>

        <form action={sair}>
          <button
            type="submit"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[13px] text-[#7c746d] transition hover:bg-[#f5ece7] hover:text-[#53615c]"
          >
            <IconeWorkspace nome="sair" className="h-4 w-4" />
            <span className="font-semibold tracking-[0.04em]">Sair</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
