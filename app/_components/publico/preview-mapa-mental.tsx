const nos = [
  { texto: "Propósito", x: "42%", y: "42%", tom: "bg-[#63736e] text-white" },
  { texto: "Clareza", x: "11%", y: "18%", tom: "bg-[#f3e9dd]" },
  { texto: "Decisões", x: "70%", y: "15%", tom: "bg-[#e3eee9]" },
  { texto: "Foco", x: "8%", y: "68%", tom: "bg-[#e7ddd4]" },
  { texto: "Ações", x: "72%", y: "67%", tom: "bg-[#ece4cf]" },
];

export function PreviewMapaMental({ variante = "organico" }: { variante?: "organico" | "fluxo" | "pesquisa" | "rotina" }) {
  if (variante === "fluxo") return <PreviewFluxo />;

  return (
    <div className="relative h-full min-h-48 overflow-hidden bg-[#f4f0e9]">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#9b9a91_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50 50 C37 34 25 27 18 25 M50 50 C64 34 73 25 79 23 M50 50 C34 61 24 72 17 76 M50 50 C64 62 74 71 81 75" fill="none" stroke="#89938e" strokeWidth="0.8" />
      </svg>
      {nos.map((no, indice) => (
        <div
          key={no.texto}
          style={{ left: no.x, top: no.y }}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 px-3 py-2 text-[10px] shadow-[0_5px_14px_rgba(88,74,62,0.12)] ${
            indice === 0 ? no.tom : variante === "pesquisa" ? "bg-[#edf0e8]" : variante === "rotina" ? "bg-[#eee4db]" : no.tom
          }`}
        >
          {no.texto}
        </div>
      ))}
    </div>
  );
}

function PreviewFluxo() {
  const etapas = ["Ideia", "Síntese", "Mapa", "Decisão"];
  return (
    <div className="relative flex h-full min-h-48 items-center justify-center overflow-hidden bg-[#f6f2ec] px-5">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(#c9c3ba_1px,transparent_1px),linear-gradient(90deg,#c9c3ba_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative grid w-full grid-cols-4 items-center gap-2">
        {etapas.map((etapa, indice) => (
          <div key={etapa} className="relative">
            <div className={`relative z-10 rounded-xl border border-white bg-white/90 px-2 py-4 text-center text-[9px] shadow-sm ${indice === 2 ? "text-[#52645f] ring-2 ring-[#9aaba5]/35" : "text-[#786d64]"}`}>
              {etapa}
            </div>
            {indice < etapas.length - 1 ? <span className="absolute left-[90%] top-1/2 h-px w-[35%] bg-[#87958f] after:absolute after:-right-0.5 after:-top-[2px] after:h-1.5 after:w-1.5 after:rotate-45 after:border-r after:border-t after:border-[#87958f]" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
