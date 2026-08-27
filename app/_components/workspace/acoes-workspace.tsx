import { IconeWorkspace } from "@/app/_components/workspace/icone-workspace";

export function AcoesWorkspace() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <button
        type="button"
        aria-label="Notificações"
        className="relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-[#746a62] transition hover:bg-[#f0e7e0] hover:text-[#53615c]"
      >
        <IconeWorkspace nome="notificacoes" className="h-[18px] w-[18px]" />
        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#ba1a1a]" />
      </button>

      <button
        type="button"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#625e54] px-4 py-2 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[0_12px_24px_rgba(83,97,92,0.16)] transition hover:bg-[#555146]"
      >
        <IconeWorkspace nome="adicionar" className="h-[16px] w-[16px]" />
        <span className="hidden sm:inline">New Project</span>
        <span className="sm:hidden">New</span>
      </button>
    </div>
  );
}
