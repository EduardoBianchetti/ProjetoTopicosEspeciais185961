import React, { useEffect } from "react";
const Cabecalho = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn bg-dark text-light"
                onClick={props.clickProduto}
              >
                Produto
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn bg-dark text-light"
                onClick={props.clickTipoProduto}
              >
                Tipo de Produto
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn bg-dark text-light"
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
