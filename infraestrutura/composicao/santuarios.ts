import { ListarSantuariosDoDashboard } from "@/aplicacao/santuarios/listar-santuarios-do-dashboard";
import { RepositorioDeSantuariosEmMemoria } from "@/infraestrutura/persistencia/repositorio-de-santuarios-em-memoria";

const repositorioDeSantuarios = new RepositorioDeSantuariosEmMemoria();

export const listarSantuariosDoDashboard = new ListarSantuariosDoDashboard(
  repositorioDeSantuarios,
);
