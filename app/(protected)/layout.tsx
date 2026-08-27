import { BarraLateralWorkspace } from "@/app/_components/workspace/barra-lateral-workspace";
import { CabecalhoWorkspace } from "@/app/_components/workspace/cabecalho-workspace";
import { exigirUsuarioAutenticado } from "@/infraestrutura/autorizacao/usuario-atual";

export default async function LayoutProtegido({
  children,
}: {
  children: React.ReactNode;
}) {
  const usuario = await exigirUsuarioAutenticado();

  return (
    <div className="min-h-screen bg-[#fff8f4] text-[#1e1b18]">
      <BarraLateralWorkspace nomeDoUsuario={usuario.nome} />
      <div className="md:pl-56 xl:pl-60">
        <CabecalhoWorkspace />
        <main>{children}</main>
      </div>
    </div>
  );
}
