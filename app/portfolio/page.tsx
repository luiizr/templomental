import Link from "next/link";

import { CabecalhoPublico, RodapePublico } from "@/app/componentes/navegacao-publica";
import { PreviewMapaMental } from "@/app/componentes/preview-mapa-mental";

const projetos = [
  {
    categoria: "Estratégico",
    titulo: "Planejamento Corporativo",
    texto: "Visão macro para tomada de decisão de alto nível, estruturando departamentos e metas globais com clareza visual.",
    variante: "organico" as const,
  },
  {
    categoria: "Criativo",
    titulo: "Brainstorming Fluido",
    texto: "Conexões orgânicas para liberar o fluxo de ideias sem restrições hierárquicas rígidas.",
    variante: "fluxo" as const,
  },
  {
    categoria: "Educacional",
    titulo: "Síntese de Pesquisa",
    texto: "Estruturação de dados acadêmicos e literários. Transforma capítulos inteiros em redes de conhecimento facilmente navegáveis.",
    variante: "pesquisa" as const,
  },
  {
    categoria: "Pessoal",
    titulo: "Mapeamento de Rotina",
    texto: "Organização de hábitos, metas pessoais e reflexões diárias em um formato que promove a paz de espírito.",
    variante: "rotina" as const,
  },
];

export default function PaginaDoPortfolio() {
  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#50443b]">
      <CabecalhoPublico paginaAtiva="portfolio" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:pt-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#7f8d88]">Portfólio</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-tight text-[#4c3d34] sm:text-5xl">
            A Arte da Organização Mental
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#74685f]">
            Explore nossos pilares de mapas mentais. Cada estrutura é meticulosamente desenhada para reduzir a carga cognitiva e trazer clareza visual a processos complexos.
          </p>
        </header>

        <div className="mt-14 grid gap-x-7 gap-y-12 md:grid-cols-2">
          {projetos.map((projeto, indice) => (
            <article key={projeto.titulo} className={indice === 0 ? "md:col-span-1" : ""}>
              <div className="h-64 overflow-hidden rounded-[4px] border border-[#eee5dd] shadow-[0_16px_35px_rgba(94,76,62,0.09)] sm:h-72">
                <PreviewMapaMental variante={projeto.variante} />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#82908b]">{projeto.categoria}</p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[#4b3e35]">{projeto.titulo}</h2>
                </div>
                <span className="mt-1 text-[#75837e]">⌁</span>
              </div>
              <p className="mt-2 max-w-xl text-xs leading-5 text-[#776b62]">{projeto.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eee5de] px-6 py-20 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#4d3f36]">Pronto para organizar seus pensamentos?</h2>
        <p className="mt-3 text-xs text-[#7d726a]">Descubra a tranquilidade de uma mente bem estruturada.</p>
        <Link href="/#comecar" className="mt-6 inline-flex rounded-full bg-[#60716c] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#50615c]">
          Iniciar mapeamento
        </Link>
      </section>

      <RodapePublico />
    </main>
  );
}
