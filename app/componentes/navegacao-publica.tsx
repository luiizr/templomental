import Link from "next/link";

import { AcessoAoTemplo } from "@/app/componentes/cartao-autenticacao";
import { LinkParaFaq } from "@/app/componentes/link-para-faq";

type PaginaAtiva = "inicio" | "sobre" | "portfolio";

const itens = [
  { nome: "Início", href: "/", pagina: "inicio" as const },
  { nome: "Sobre nós", href: "/sobre-nos", pagina: "sobre" as const },
  { nome: "Portfólio", href: "/portfolio", pagina: "portfolio" as const },
  { nome: "Faq", href: "/#faq" },
];

export function CabecalhoPublico({
  paginaAtiva,
}: {
  paginaAtiva: PaginaAtiva;
}) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/70 bg-[#fffaf6]/88 px-4 py-2 shadow-[0_8px_28px_rgba(90,73,61,0.08)] backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <Link
            href="/"
            className="select-none font-[family-name:var(--font-script)] text-[23px] leading-none text-[#66736f] sm:text-[28px]"
          >
            Templo Mental
          </Link>

          <nav
            aria-label="Navegação principal"
            className="order-3 flex w-full items-center justify-center gap-1 overflow-x-auto rounded-full border border-white/80 bg-white/80 px-1.5 py-1 shadow-[0_10px_24px_rgba(106,88,72,0.12)] sm:order-none sm:w-auto"
          >
            {itens.map((item) => {
              const ativo = "pagina" in item && item.pagina === paginaAtiva;
              const classeDoLink = `whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12px] tracking-tight transition sm:text-[13px] ${
                ativo
                  ? "bg-[#7f7062] text-white shadow-[0_8px_18px_rgba(82,67,55,0.16)]"
                  : "text-[#514338] hover:bg-[#f4eee9]"
              }`;

              if (item.nome === "Faq") {
                return <LinkParaFaq key={item.nome} className={classeDoLink} />;
              }

              return (
                <Link
                  key={item.nome}
                  href={item.href}
                  aria-current={ativo ? "page" : undefined}
                  className={classeDoLink}
                >
                  {item.nome}
                </Link>
              );
            })}
          </nav>

          <AcessoAoTemplo />
        </div>
      </header>
      <div aria-hidden="true" className="h-[98px] sm:h-[61px]" />
    </>
  );
}

export function RodapePublico() {
  return (
    <footer className="border-t border-[#e8ded6] bg-[#f2eae4] px-6 py-8 text-[#62564d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" className="font-[family-name:var(--font-script)] text-2xl text-[#65736f]">
            Templo Mental
          </Link>
          <p className="mt-2 text-[10px] text-[#81776f]">
            © 2026 Templo Mental. Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[11px]">
          <a href="#privacidade" className="hover:text-[#34433f]">Privacidade</a>
          <a href="#termos" className="hover:text-[#34433f]">Termos</a>
          <a href="mailto:contato@templomental.com" className="hover:text-[#34433f]">Contato</a>
          <a href="#newsletter" className="hover:text-[#34433f]">Newsletter</a>
        </nav>
      </div>
    </footer>
  );
}
