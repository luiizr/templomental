import { IconeWorkspace } from "@/app/_components/workspace/icone-workspace";

export function AbasWorkspace() {
  return (
    <label className="group flex w-full max-w-[380px] items-center gap-2.5 rounded-[18px] border border-[#ddd3cc] bg-[#fbf6f1] px-3 py-1.5 transition focus-within:border-[#cabbaf]">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1e7df] text-[#74685f] transition group-focus-within:bg-[#e7ddd4] group-focus-within:text-[#5f564f]">
        <IconeWorkspace nome="pesquisa" className="h-[15px] w-[15px]" />
      </span>

      <span className="h-4 w-px bg-[#ddd1c8]" aria-hidden="true" />

      <input
        type="search"
        name="pesquisa"
        placeholder="Pesquisar santuários"
        className="w-full bg-transparent text-[13px] text-[#5d5249] outline-none placeholder:text-[#998d84]"
      />
    </label>
  );
}
