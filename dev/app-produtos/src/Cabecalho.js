import React, { useState, useEffect, useRef } from "react";
const Cabecalho = (props) => {
  useEffect(() => {}, []);

  return (
    <form>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={props.clickUsuario}
      >
        Usuários
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={props.clickTipoProduto}
      >
        Tipos de Produtos
      </button>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={props.clickProduto}
      >
        Produtos
      </button>
    </form>
  );
};
export default Cabecalho;
