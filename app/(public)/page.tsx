import { AcessoAoTemplo } from "@/app/_components/autenticacao/cartao-autenticacao";
import { CabecalhoPublico, RodapePublico } from "@/app/_components/publico/navegacao-publica";

const beneficios = [
  { numero: "01", titulo: "Clareza Absoluta", texto: "Visualize conexões complexas com simplicidade. Elimine o ruído e foque no essencial." },
  { numero: "02", titulo: "Foco Profundo", texto: "Um ambiente livre de distrações projetado para estados de fluxo prolongados." },
  { numero: "03", titulo: "Estrutura Orgânica", texto: "Organize ideias como elas crescem naturalmente na sua mente. Fluidez com propósito." },
];

const perguntas = [
  { pergunta: "O que o Templo Mental transforma?", resposta: "Ideias, anotações e reuniões são sintetizadas em mapas visuais conectados, com decisões, riscos e próximos passos." },
  { pergunta: "Posso reorganizar o mapa depois?", resposta: "Sim. Cada nó poderá ser movido, editado, conectado e aprofundado sem perder o resumo original." },
  { pergunta: "Meus mapas ficam salvos?", resposta: "Sim. Cada mapa pertence à sua conta e será persistido para que você continue exatamente de onde parou." },
];

export default function Home() {
  return (
    <main className="pagina-publica min-h-screen bg-[#fffaf6] text-[#5d4f44]">
      <div className="bg-[#f2eae4] p-2 sm:p-4">
        <section
          className="relative min-h-[calc(100vh-1rem)] overflow-hidden rounded-md border border-white/80 shadow-[0_22px_50px_rgba(89,72,59,0.1)] sm:min-h-[calc(100vh-2rem)]"
          style={{ backgroundImage: "url('/background-templomental.png')", backgroundPosition: "60% center", backgroundSize: "cover" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,246,0.98)_0%,rgba(255,250,246,0.8)_43%,rgba(255,250,246,0.3)_78%,rgba(255,250,246,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,238,232,0.18),rgba(244,238,232,0.42))]" />

          <div className="relative z-10 flex min-h-[calc(100vh-1rem)] flex-col sm:min-h-[calc(100vh-2rem)]">
            <CabecalhoPublico paginaAtiva="inicio" />
            <div className="relative flex flex-1">
              <div className="absolute bottom-8 left-5 z-20 max-w-[430px] px-4 py-3 sm:bottom-10 sm:left-6 sm:px-5 sm:py-4 lg:bottom-12 lg:left-8">
                <div className="mb-4 h-px w-16 bg-[#8a7868]/55" />
                <h1 className="max-w-[12ch] font-[family-name:var(--font-display)] text-[40px] leading-[0.92] tracking-[-0.03em] text-[#6a584a] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] sm:text-[54px] lg:text-[60px]">
                  Dê forma ao que existe na sua mente
                </h1>
                <p className="mt-4 max-w-[32ch] text-[16px] leading-6 text-[#74645a]">Mapas mentais que ajudam você a tomar melhor suas decisões.</p>
              </div>

              <a href="#santuario" className="absolute bottom-4 right-5 z-20 flex items-center gap-2 text-[13px] text-[#5d4f44] sm:right-6">
                <span>Role a página</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#4f4339]/25 text-[14px]">↓</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <section id="santuario" className="scroll-mt-24 px-6 py-24 sm:scroll-mt-16 sm:px-8 lg:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#7d8b86]">A experiência</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[#4f4037] sm:text-4xl">O Santuário Digital da Mente</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-6 text-[#786c63]">Reduza a carga cognitiva e encontre clareza. Nosso sistema é desenhado para pensadores estratégicos.</p>
        </header>
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {beneficios.map((beneficio) => (
            <article key={beneficio.titulo} className="min-h-52 rounded-md border border-white bg-[#f2eae4] p-7">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e8e1d2] text-[10px] font-semibold text-[#687670]">{beneficio.numero}</span>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl text-[#4d4037]">{beneficio.titulo}</h3>
              <p className="mt-3 text-[13px] leading-5 text-[#746a62]">{beneficio.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-[#eee5de] bg-[#fdf8f4] px-6 py-24 sm:scroll-mt-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <header>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#7e8d87]">Perguntas frequentes</p>
            <h2 className="mt-3 max-w-[12ch] font-[family-name:var(--font-display)] text-4xl leading-tight text-[#4d4037]">Clareza antes de começar.</h2>
          </header>
          <div className="divide-y divide-[#e7ddd5] border-y border-[#e7ddd5]">
            {perguntas.map((item) => (
              <details key={item.pergunta} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold text-[#5b5048]">
                  {item.pergunta}<span className="text-xl font-light text-[#788680] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pt-3 text-[15px] leading-6 text-[#796e65]">{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="comecar" className="scroll-mt-24 px-6 py-20 text-center sm:scroll-mt-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#4e4138]">Pronto para dar forma aos seus pensamentos?</h2>
        <p className="mt-3 text-[13px] text-[#7d726a]">Seu primeiro mapa começa com uma ideia.</p>
        <div className="mt-6"><AcessoAoTemplo /></div>
      </section>

      <RodapePublico />
    </main>
  );
}
