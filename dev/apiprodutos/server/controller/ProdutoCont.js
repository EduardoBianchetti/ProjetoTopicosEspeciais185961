const Produto = require("../model/ProdutoSchema");
module.exports = {
  listar: async (req, res) => {
    Produto.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    })
      .populate("tipoProduto")
      .populate("usuario")
      .sort({ titulo: 1 });
  },

  incluir: async (req, res) => {
    let obj = new Produto(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
  alterar: async (req, res) => {
    let obj = new Produto(req.body);
    Produto.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
  excluir: async (req, res) => {
    Produto.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },
  obterPeloId: (req, res) => {
    Produto.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    })
      .populate("tipoProduto")
      .populate("usuario");
  },
  filtrar: (req, res) => {
    Produto.find(
      {
        $or: [
          { nome: { $regex: req.params.filtro, $options: "i" } },
          { marca: { $regex: req.params.filtro, $options: "i" } },
          { descricao: { $regex: req.params.filtro, $options: "i" } },
        ],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("tipoProduto")
      .populate("usuario")
      .sort({ titulo: -1 });
  },
};
