import React from "react";

const ProdutoList = (props) => {
  return (
    <div>
      <h4>Listagem de Produtos</h4>
      <button
        onClick={props.onClickAtualizar}
        type="button"
        className="btn btn-primary btn-sm"
      >
        Atualizar Lista
      </button>
      <button className="btn btn-primary btn-sm" onClick={props.inserir}>
        Inserir
      </button>
      <br />
      <br />
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Descrição</th>
            <th>Data e Hora Criado</th>
            <th>Valor Unitário</th>
            <th>Tipo Produto</th>
            <th>Usuário</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.produto.length > 0 ? (
            props.produto.map((o, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{o._id}</td>
                <td>{o.nome}</td>
                <td>{o.marca}</td>
                <td>{o.descricao}</td>
                <td>{o.dataHoraCriada}</td>
                <td>{o.valorUnitario}</td>
                <td>{o.tipoProduto.descricao}</td>
                <td>{o.usuario.nome}</td>

                <td>
                  <button
                    onClick={() => props.editar(o._id)}
                    className="btn btn-primary btn-sm"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => props.excluir(o._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Nenhum Produto.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ProdutoList;
