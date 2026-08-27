import { AutenticarUsuario, CadastrarUsuario } from "@/aplicacao/autenticacao/casos-de-uso";
import type { RepositorioDeUsuarios } from "@/dominio/usuarios/usuario";
import { obterPoolPostgreSQL } from "@/infraestrutura/persistencia/conexao-postgresql";
import { RepositorioDeUsuariosEmMemoria } from "@/infraestrutura/persistencia/repositorio-de-usuarios-em-memoria";
import { RepositorioDeUsuariosPostgreSQL } from "@/infraestrutura/persistencia/repositorio-de-usuarios-postgresql";
import { CriptografadorDeSenhaScrypt } from "@/infraestrutura/seguranca/criptografador-de-senha-scrypt";

function criarRepositorioDeUsuarios(): RepositorioDeUsuarios {
  if (!process.env.DATABASE_URL) {
    return new RepositorioDeUsuariosEmMemoria();
  }

  return new RepositorioDeUsuariosPostgreSQL(obterPoolPostgreSQL());
}

export const repositorioDeUsuarios = criarRepositorioDeUsuarios();
const criptografadorDeSenha = new CriptografadorDeSenhaScrypt();

export const cadastrarUsuario = new CadastrarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
export const autenticarUsuario = new AutenticarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
