import React from "react";
const UsuarioForm = (props) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.setUsuario({ ...props.usuario, [name]: value });
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
          value={props.usuario.nome}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="text"
          name="email"
          value={props.usuario.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input
          className="form-control"
          type="text"
          name="senha"
          value={props.usuario.senha}
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
export default UsuarioForm;
