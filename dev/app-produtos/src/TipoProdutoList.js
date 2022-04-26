const TipoProdutoList = (props) => {
  return (
    <div>
      <h4>Listagem de Tipos de Produtos</h4>
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
      <table class="table table-bordered border-dark">
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Descrição</th>
            <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.tipoProduto.length > 0 ? (
            props.tipoProduto.map((o, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{o._id}</td>
                <td>{o.descricao}</td>
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
              <td colSpan={5}>Nenhum Tipo de Produto.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TipoProdutoList;
