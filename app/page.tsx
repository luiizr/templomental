const navItems = ["Início", "Sobre nós", "Portfólio", "Faq"];

const stats = [
  { value: "+2.500", label: "Mentes organizadas" },
  { value: "+100.000", label: "Mapas Criados" },
  { value: "+2.000", label: "Reuniões transformadas" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#d7e1df] p-2 text-[#5d4f44] sm:p-4">
      <section
        className="relative min-h-[calc(100vh-1rem)] overflow-hidden rounded-[34px] border border-white/60 shadow-[0_30px_80px_rgba(89,72,59,0.16)] sm:min-h-[calc(100vh-2rem)]"
        style={{
          backgroundImage: "url('/background-templomental.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,240,0.08),rgba(255,245,236,0.03))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.06),rgba(255,255,255,0)_38%)]" />

        <div className="relative z-10 flex min-h-[calc(100vh-1rem)] flex-col sm:min-h-[calc(100vh-2rem)]">
          <header className="px-5 pt-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="select-none font-[family-name:var(--font-script)] text-[22px] leading-none text-white/95 drop-shadow-[0_1px_2px_rgba(71,57,46,0.25)] sm:text-[28px]">
                Templo Mental
              </div>

              <nav className="hidden rounded-full border border-white/60 bg-white/72 px-1.5 py-1 shadow-[0_10px_24px_rgba(106,88,72,0.12)] md:flex">
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    className={`rounded-full px-4 py-1.5 text-[14px] tracking-tight transition ${
                      index === 0
                        ? "bg-[#7f7062] text-white shadow-[0_8px_18px_rgba(82,67,55,0.18)]"
                        : "text-[#514338] hover:bg-white/70"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <button
                type="button"
                className="rounded-full border border-white/70 bg-[#7f7062] px-4 py-1.5 text-[14px] font-medium text-white shadow-[0_10px_22px_rgba(82,67,55,0.18)] transition hover:bg-[#6c5f55]"
              >
                Comece →
              </button>
            </div>
          </header>

          <div className="relative flex flex-1">
            <div className="absolute bottom-8 left-5 z-20 max-w-[430px] rounded-[28px] bg-[linear-gradient(180deg,rgba(247,239,230,0.2),rgba(247,239,230,0.06))] px-4 py-3 backdrop-blur-[2px] sm:bottom-10 sm:left-6 sm:px-5 sm:py-4 lg:bottom-12 lg:left-6">
              <div className="mb-4 h-px w-24 bg-[#8a7868]/55" />
              <h1 className="max-w-[12ch] font-[family-name:var(--font-display)] text-[40px] leading-[0.92] tracking-[-0.03em] text-[#6a584a] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)] sm:text-[54px] lg:text-[60px]">
                Dê forma ao que existe na sua mente
              </h1>
              <p className="mt-3 max-w-[32ch] text-[14px] leading-5 text-[#7f6f62] sm:text-[15px]">
                Mapas mentais que ajudam você a tomar melhor suas decisões
              </p>
            </div>

            <aside className="absolute right-4 top-1/2 z-20 w-[190px] -translate-y-1/2 rounded-[22px] border border-white/65 bg-[#f8f4ee]/86 p-2.5 shadow-[0_16px_34px_rgba(99,82,68,0.16)] backdrop-blur-[7px] sm:right-6 lg:right-8">
              <div className="space-y-2">
                {stats.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-[16px] px-1 py-1.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#86a09c] text-white shadow-[0_10px_22px_rgba(107,126,122,0.18)]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M17 20v-1.2a4.8 4.8 0 0 0-4.8-4.8H7.8A4.8 4.8 0 0 0 3 18.8V20" />
                        <circle cx="10" cy="7.8" r="3.3" />
                        <path d="M17.5 8.2a2.6 2.6 0 0 1 0 5.2" />
                        <path d="M19.5 20v-1.2a4.5 4.5 0 0 0-2.8-4.1" />
                      </svg>
                    </div>
                    <div className="pt-0.5">
                      <div className="font-[family-name:var(--font-display)] text-[16px] leading-none text-[#7f6f62]">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[12px] leading-[1.15] text-[#7d6d5f]">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <div className="absolute bottom-4 right-5 z-20 flex items-center gap-2 text-[13px] text-[#4f4339] sm:right-6">
              <span>Role a página</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#4f4339]/25 text-[14px] leading-none">
                ↓
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
