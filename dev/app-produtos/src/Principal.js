import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UsuarioCont from "./UsuarioCont";
import TipoProdutoCont from "./TipoProdutoCont";
import ProdutoCont from "./ProdutoCont";
import Cabecalho from "./Cabecalho";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";

function Principal() {
  const [tela, setTela] = useState("usuario");

  const toastRef = useRef();
  useEffect(() => {}, []);

  const clickUsuario = () => {
    setTela("usuario");
  };

  const clickTipoProduto = () => {
    setTela("tipoProduto");
  };

  const clickProduto = () => {
    setTela("produto");
  };

  if (tela === "usuario") {
    return (
      <div>
        <Cabecalho
          clickUsuario={clickUsuario}
          clickTipoProduto={clickTipoProduto}
          clickProduto={clickProduto}
        />
        <UsuarioCont />
        <Toast ref={toastRef} />
      </div>
    );
  } else if (tela === "tipoProduto") {
    return (
      <div>
        <Cabecalho
          clickUsuario={clickUsuario}
          clickTipoProduto={clickTipoProduto}
          clickProduto={clickProduto}
        />
        <TipoProdutoCont />
        <Toast ref={toastRef} />
      </div>
    );
  } else if (tela === "produto") {
    return (
      <div>
        <Cabecalho
          clickUsuario={clickProduto}
          clickTipoProduto={clickTipoProduto}
          clickProduto={clickProduto}
        />
        <ProdutoCont />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default Principal;
