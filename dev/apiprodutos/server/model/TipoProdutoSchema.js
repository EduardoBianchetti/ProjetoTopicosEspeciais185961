const mongoose = require("mongoose");
const TipoProdutoSchema = new mongoose.Schema({
  descricao: { type: String, required: true },
});
module.exports = mongoose.model("TipoProduto", TipoProdutoSchema);
