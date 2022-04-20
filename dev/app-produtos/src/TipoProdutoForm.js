import React from "react";
const TipoProdutoForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setTipoProduto({ ...props.tipoProduto, [name]: value });
  };

  return (
    <form>
      <div className="form-group">
        <label>Descrição</label>
        <input
          className="form-control"
          type="text"
          name="descricao"
          value={props.tipoProduto.descricao}
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
export default TipoProdutoForm;
