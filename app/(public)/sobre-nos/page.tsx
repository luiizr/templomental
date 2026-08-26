import Image from "next/image";

import { CabecalhoPublico, RodapePublico } from "@/app/_components/publico/navegacao-publica";

const pilares = [
  {
    numero: "01",
    titulo: "Serenidade",
    texto: "O silêncio visual como ferramenta primária. Reduzimos o ruído para que suas ideias possam ecoar com clareza absoluta.",
  },
  {
    numero: "02",
    titulo: "Organização orgânica",
    texto: "Estruturas que se adaptam à mente, não o oposto. Mapeamento de pensamentos que flui como a própria cognição.",
  },
  {
    numero: "03",
    titulo: "Intelecto tátil",
    texto: "A sensação de papel e presença em elementos digitais. Cada interação deve parecer intencional e fisicamente enraizada.",
  },
];

export default function PaginaSobreNos() {
  return (
    <main className="pagina-publica min-h-screen bg-[#fffaf6] text-[#554940]">
      <CabecalhoPublico paginaAtiva="sobre" />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#7b8b85]">Sobre nós</p>
          <h1 className="mt-4 max-w-[15ch] font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-[#4c4038] sm:text-5xl">
            Um refúgio digital para mentes <em className="font-normal text-[#71807b]">inquietas.</em>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#73685f]">
            Acreditamos que a clareza mental nasce do ambiente em que operamos. O Templo Mental foi forjado para afastar o ruído e amplificar o intelecto, unindo design tátil ao minimalismo estratégico.
          </p>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-md shadow-[0_22px_50px_rgba(93,76,62,0.12)]">
          <Image src="/santuario-interior.png" alt="Ambiente minimalista e sereno do Templo Mental" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </section>

      <div className="mx-auto h-px max-w-7xl bg-[#eee6df]" />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md shadow-[0_22px_50px_rgba(93,76,62,0.1)]">
          <Image src="/caderno-santuario.png" alt="Caderno aberto sobre uma mesa clara" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="space-y-10 lg:pl-6">
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#53615d]">Nossa História</h2>
            <p className="mt-3 text-sm leading-7 text-[#766b63]">
              Nascido da frustração com ferramentas digitais caóticas, o Templo Mental começou como um experimento em arquitetura da informação. Queríamos um espaço que respeitasse a cadência do pensamento humano, onde ordenar a organização fosse intuitiva e a interface recuasse, permitindo que a escrita e a pesquisa tomassem o centro do palco.
            </p>
          </article>
          <article>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#53615d]">A Missão</h2>
            <p className="mt-3 text-sm leading-7 text-[#766b63]">
              Nossa missão é simples: devolver o foco aos criadores estratégicos. Através de uma filosofia de design que chamamos de Modernismo Tátil, criamos artefatos digitais que parecem menos reconfortantes e estruturados quanto uma biblioteca pessoal de alto padrão.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#fdf8f4] px-6 py-20 sm:px-8">
        <header className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#4e4138]">Pilares do Santuário</h2>
          <p className="mt-2 text-xs text-[#81766e]">Princípios inegociáveis que guiam cada pixel da nossa interface.</p>
        </header>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
          {pilares.map((pilar, indice) => (
            <article key={pilar.titulo} className={`min-h-56 rounded-md border border-white/80 p-7 ${indice === 0 ? "bg-[#f3e7df]" : indice === 1 ? "bg-[#e9e5dc]" : "bg-[#eae3d2]"}`}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/55 text-[11px] font-semibold text-[#66746f]">{pilar.numero}</span>
              <h3 className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4e4a45]">{pilar.titulo}</h3>
              <p className="mt-4 text-xs leading-5 text-[#706860]">{pilar.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <RodapePublico />
    </main>
  );
}
