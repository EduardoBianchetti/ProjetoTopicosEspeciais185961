const { Router } = require("express");
const routes = Router();

var cors = require("cors");
routes.use(cors({ origin: "*" }));

const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);
const produtoRout = require("./ProdutoRout");
routes.use("/api", produtoRout);
const tipoProdutoRout = require("./TipoProdutoRout");
routes.use("/api", tipoProdutoRout);
module.exports = routes;
