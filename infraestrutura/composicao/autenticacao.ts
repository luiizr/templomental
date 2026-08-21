import { AutenticarUsuario, CadastrarUsuario } from "@/aplicacao/autenticacao/casos-de-uso";
import { RepositorioDeUsuariosEmMemoria } from "@/infraestrutura/persistencia/repositorio-de-usuarios-em-memoria";
import { CriptografadorDeSenhaScrypt } from "@/infraestrutura/seguranca/criptografador-de-senha-scrypt";

export const repositorioDeUsuarios = new RepositorioDeUsuariosEmMemoria();
const criptografadorDeSenha = new CriptografadorDeSenhaScrypt();

export const cadastrarUsuario = new CadastrarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
export const autenticarUsuario = new AutenticarUsuario(repositorioDeUsuarios, criptografadorDeSenha);
