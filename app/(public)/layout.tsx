import { redirect } from "next/navigation";

import { obterUsuarioAtual } from "@/infraestrutura/autorizacao/usuario-atual";

export default async function LayoutPublico({
  children,
}: {
  children: React.ReactNode;
}) {
  const usuario = await obterUsuarioAtual();

  if (usuario) redirect("/dashboard");

  return children;
}
