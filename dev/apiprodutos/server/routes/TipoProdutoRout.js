const express = require("express");
const routes = express.Router();
const controle = require("../controller/TipoProdutoCont");

routes.route("/tiposproduto").get(controle.listar);
routes.route("/tiposproduto").post(controle.incluir);
routes.route("/tiposproduto").put(controle.alterar);
routes.route("/tiposproduto/:id").delete(controle.excluir);
routes.route("/tiposproduto/:id").get(controle.obterPeloId);
routes.route("/tiposproduto/filtro/:filtro").get(controle.filtrar);
module.exports = routes;
