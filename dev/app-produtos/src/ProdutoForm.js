import React from "react";
const ProdutoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setProduto({ ...props.produto, [name]: value });
  };

  return (
    <form>
      <div className="form-group">
        <br />
        <br />
        <label>Nome</label>
        <input
          className="form-control"
          type="text"
          name="nome"
          value={props.produto.nome}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Marca</label>
        <input
          className="form-control"
          type="text"
          name="marca"
          value={props.produto.marca}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Descrição</label>
        <input
          className="form-control"
          type="text"
          name="descricao"
          value={props.produto.descricao}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Valor Unitário</label>
        <input
          className="form-control"
          type="number"
          name="valorUnitario"
          value={props.produto.valorUnitario}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Tipo de Produto</label>
        <input
          className="form-control"
          type="text"
          name="tipoProduto"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Usuário</label>
        <input
          className="form-control"
          type="text"
          name="usuario"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <button
          type="button"
          onClick={props.salvar}
          className="btn btn-primary btn-sm"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={props.cancelar}
          className="btn btn-primary btn-sm"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};
export default ProdutoForm;
