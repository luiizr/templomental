import type { RepositorioDeUsuarios, Usuario } from "@/dominio/usuarios/usuario";

/** Adaptador temporário. Os usuários são perdidos ao reiniciar o servidor. */
export class RepositorioDeUsuariosEmMemoria implements RepositorioDeUsuarios {
  private readonly usuarios = new Map<string, Usuario>();

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return [...this.usuarios.values()].find((usuario) => usuario.email === email) ?? null;
  }

  async buscarPorId(id: string): Promise<Usuario | null> {
    return this.usuarios.get(id) ?? null;
  }

  async salvar(usuario: Usuario): Promise<void> {
    this.usuarios.set(usuario.id, usuario);
  }
}
