import { exigirUsuarioAutenticado } from "@/infraestrutura/autorizacao/usuario-atual";
import { listarSantuariosDoDashboard } from "@/infraestrutura/composicao/santuarios";

export default async function PaginaDoDashboard() {
  const usuario = await exigirUsuarioAutenticado();
  const santuarios = await listarSantuariosDoDashboard.executar(usuario.id);

  return (
    <section className="px-5 py-10 md:px-6 xl:px-10 xl:py-14">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#7d8b86]">
              workspace
            </p>
            <h1 className="mt-3 whitespace-nowrap font-[family-name:var(--font-display)] text-[44px] leading-[0.95] text-[#53615c] md:text-[56px]">
              Seus Santuários
            </h1>
            <p className="mt-4 max-w-2xl text-[18px] leading-8 text-[#706760]">
              Olá, {usuario.nome}. Acesse seus mapas mentais e espaços de pensamento
              em um ambiente sereno, claro e livre de distrações.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#53615c] px-6 py-3 text-[13px] font-semibold tracking-[0.05em] text-white shadow-[0_14px_26px_rgba(83,97,92,0.16)] transition hover:bg-[#48544f] md:hidden"
          >
            Novo Santuário
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {santuarios.map((cartao) => (
            <article
              key={cartao.id}
              className="overflow-hidden rounded-[24px] border border-[#e7ddd5] bg-white shadow-[0_18px_42px_rgba(83,97,92,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(83,97,92,0.12)]"
            >
              <div
                className={`relative flex h-48 items-end p-5 ${fundoPorCategoria[cartao.categoria]}`}
              >
                <span className="rounded-full bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#53615c] backdrop-blur-sm">
                  {cartao.categoria}
                </span>
              </div>

              <div className="p-6">
                <h2 className="font-[family-name:var(--font-display)] text-[28px] leading-tight text-[#302824]">
                  {cartao.titulo}
                </h2>
                <p className="mt-3 text-[14px] leading-6 text-[#746a62]">
                  {cartao.descricao}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#eee5de] pt-4 text-[12px] text-[#8b8179]">
                  <span>{cartao.destaque}</span>
                  <span>{cartao.atualizadoEmTexto}</span>
                </div>
                <div className="mt-3 flex justify-end text-[12px] font-semibold text-[#53615c]">
                  <span className="text-[#53615c]">Abrir</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const fundoPorCategoria = {
  Pasta: "bg-[linear-gradient(135deg,#ede3db,#e1ddd2)]",
  Estratégia: "bg-[linear-gradient(135deg,#dde4de,#f0ebe4)]",
  Esboço: "bg-[linear-gradient(135deg,#f1ebe5,#e7dfd8)]",
} as const;
