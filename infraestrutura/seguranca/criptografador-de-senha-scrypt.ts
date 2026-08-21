import { randomBytes, scrypt as scryptOriginal, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

import type { CriptografadorDeSenha } from "@/dominio/usuarios/usuario";

const scrypt = promisify(scryptOriginal);

export class CriptografadorDeSenhaScrypt implements CriptografadorDeSenha {
  async comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
    const [sal, chave] = senhaCriptografada.split(":");
    if (!sal || !chave) return false;

    const chaveCalculada = (await scrypt(senha, sal, 64)) as Buffer;
    const chaveSalva = Buffer.from(chave, "hex");
    return chaveCalculada.length === chaveSalva.length && timingSafeEqual(chaveCalculada, chaveSalva);
  }

  async criptografar(senha: string): Promise<string> {
    const sal = randomBytes(16).toString("hex");
    const chave = (await scrypt(senha, sal, 64)) as Buffer;
    return `${sal}:${chave.toString("hex")}`;
  }
}
