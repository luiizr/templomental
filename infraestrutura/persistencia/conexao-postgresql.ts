import "server-only";

import { Pool } from "pg";

const globalPostgreSQL = globalThis as typeof globalThis & {
  poolPostgreSQL?: Pool;
};

function obterUrlDoBanco(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.info("Defina DATABASE_URL no arquivo .env.");
    return "";
  }

  return url;
}

export function obterPoolPostgreSQL(): Pool {
  if (!globalPostgreSQL.poolPostgreSQL) {
    globalPostgreSQL.poolPostgreSQL = new Pool({
      connectionString: obterUrlDoBanco(),
      connectionTimeoutMillis: 5_000,
      idleTimeoutMillis: 30_000,
      max: 10,
    });
  }

  return globalPostgreSQL.poolPostgreSQL;
}
