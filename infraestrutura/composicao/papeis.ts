import type { RepositorioDePapeis } from "@/dominio/papeis/papel";
import { obterPoolPostgreSQL } from "@/infraestrutura/persistencia/conexao-postgresql";
import { RepositorioDePapeisEmMemoria } from "@/infraestrutura/persistencia/repositorio-de-papeis-em-memoria";
import { RepositorioDePapeisPostgreSQL } from "@/infraestrutura/persistencia/repositorio-de-papeis-postgresql";

function criarRepositorioDePapeis(): RepositorioDePapeis {
  if (!process.env.DATABASE_URL) {
    return new RepositorioDePapeisEmMemoria();
  }

  return new RepositorioDePapeisPostgreSQL(obterPoolPostgreSQL());
}

export const repositorioDePapeis = criarRepositorioDePapeis();
