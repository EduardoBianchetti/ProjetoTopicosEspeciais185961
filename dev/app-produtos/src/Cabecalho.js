import React, { useEffect } from "react";
const Cabecalho = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav">
            <li class="nav-item">
              <button
                class="btn bg-dark text-light"
                onClick={props.clickProduto}
              >
                Produto
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn bg-dark text-light"
                onClick={props.clickTipoProduto}
              >
                Tipo de Produto
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn bg-dark text-light"
                onClick={props.clickUsuario}
              >
                Usuário
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <br />
    </div>
  );
};
export default Cabecalho;
