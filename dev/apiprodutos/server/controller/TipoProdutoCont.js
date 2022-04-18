const TipoProduto = require("../model/TipoProdutoSchema");
module.exports = {
  listar: async (req, res) => {
    TipoProduto.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    }).sort({ descricao: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new TipoProduto(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
  alterar: async (req, res) => {
    let obj = new TipoProduto(req.body);
    TipoProduto.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
  excluir: async (req, res) => {
    TipoProduto.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },
  obterPeloId: (req, res) => {
    TipoProduto.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
  filtrar: (req, res) => {
    TipoProduto.find(
      {
        $or: [{ descricao: { $regex: req.params.filtro, $options: "i" } }],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    ).sort({ descricao: -1 }); // -1 decrescente 1 crescente
  },
};
