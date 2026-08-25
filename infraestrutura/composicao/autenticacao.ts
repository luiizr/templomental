import { AutenticarUsuario, CadastrarUsuario } from "@/aplicacao/autenticacao/casos-de-uso";
import { poolPostgreSQL } from "@/infraestrutura/persistencia/conexao-postgresql";
import { RepositorioDeUsuariosPostgreSQL } from "@/infraestrutura/persistencia/repositorio-de-usuarios-postgresql";
import { CriptografadorDeSenhaScrypt } from "@/infraestrutura/seguranca/criptografador-de-senha-scrypt";

export const repositorioDeUsuarios = new RepositorioDeUsuariosPostgreSQL(poolPostgreSQL);
const criptografadorDeSenha = new CriptografadorDeSenhaScrypt();

export const cadastrarUsuario = new CadastrarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
export const autenticarUsuario = new AutenticarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
// save