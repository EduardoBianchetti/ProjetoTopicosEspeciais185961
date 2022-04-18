const mongoose = require("mongoose");
const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  descricao: { type: String, required: true },
  dataHoraCriada: { type: Date, default: Date.now },
  valorUnitario: { type: Number, required: true },
  tipoProduto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TipoProduto",
    require: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});
module.exports = mongoose.model("Produto", ProdutoSchema);
