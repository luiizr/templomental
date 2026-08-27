import Link from "next/link";

import { AcoesWorkspace } from "@/app/_components/workspace/acoes-workspace";
import { AbasWorkspace } from "@/app/_components/workspace/abas-workspace";

export function CabecalhoWorkspace() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-[#fff8f4]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 md:px-6 xl:px-10">
        <Link
          href="/dashboard"
          className="hidden font-[family-name:var(--font-display)] text-[24px] leading-none text-[#53615c] sm:block md:hidden"
        >
          Templo Mental
        </Link>

        <div className="flex flex-1 items-center justify-between gap-4">
          <AbasWorkspace />
          <AcoesWorkspace />
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1280px] md:block">
        <span className="block h-0.5 w-full rounded-full bg-[#e9e2d4]" />
      </div>
    </header>
  );
}
