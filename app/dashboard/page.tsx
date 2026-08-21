import { sair } from "@/app/acoes/autenticacao";
import { exigirUsuarioAutenticado } from "@/infraestrutura/autorizacao/usuario-atual";

export default async function PaginaDoDashboard() {
  const usuario = await exigirUsuarioAutenticado();

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16">
      <section className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm text-zinc-500">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold">Olá, {usuario.nome}.</h1>
        <form action={sair} className="mt-8">
          <button className="rounded-lg border border-zinc-300 px-4 py-2" type="submit">
            Sair
          </button>
        </form>
      </section>
    </main>
  );
}
