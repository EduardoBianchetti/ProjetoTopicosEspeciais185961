import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TipoProdutoList from "./TipoProdutoList";
import TipoProdutoForm from "./TipoProdutoForm";
import TipoProdutoSrv from "./services/TipoProdutoSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

function TipoProdutoCont() {
  const [tiposProduto, setTiposProduto] = useState([]);
  const toastRef = useRef();
  useEffect(() => {
    onClickAtualizar(); // ao inicializar execula método para atualizar
  }, []);

  const onClickAtualizar = () => {
    TipoProdutoSrv.listar()
      .then((response) => {
        setTiposProduto(response.data);
        toastRef.current.show({
          severity: "success",
          summary: "Tipos de Produtos atualizados",
          life: 3000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 3000,
        });
      });
  };
  const excluir = (_id) => {
    confirmDialog({
      message: "Confirma a exclusão?",
      header: "Confirmação",
      icon: "pi pi-question",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      acceptClassName: "p-button-danger",
      accept: () => excluirConfirm(_id),
    });
  };
  const excluirConfirm = (_id) => {
    TipoProdutoSrv.excluir(_id)
      .then((response) => {
        onClickAtualizar();
        toastRef.current.show({
          severity: "success",
          summary: "Excluído",
          life: 2000,
        });
      })
      .catch((e) => {
        toastRef.current.show({
          severity: "error",
          summary: e.message,
          life: 4000,
        });
      });
  };
  const initialState = { id: null, nome: "", email: "", senha: "" };
  const [tipoProduto, setTipoProduto] = useState(initialState);
  const [editando, setEditando] = useState(false);
  const inserir = () => {
    setTipoProduto(initialState);
    setEditando(true);
  };
  const salvar = () => {
    if (tipoProduto._id == null) {
      // inclussão
      TipoProdutoSrv.incluir(tipoProduto)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    } else {
      TipoProdutoSrv.alterar(tipoProduto)
        .then((response) => {
          setEditando(false);
          onClickAtualizar();
          toastRef.current.show({
            severity: "success",
            summary: "Salvou",
            life: 2000,
          });
        })
        .catch((e) => {
          toastRef.current.show({
            severity: "error",
            summary: e.message,
            life: 4000,
          });
        });
    }
  };
  const cancelar = () => {
    console.log("Cancelou ...");
    setEditando(false);
  };

  const editar = (id) => {
    setTipoProduto(
      tiposProduto.filter((tipoProduto) => tipoProduto._id === id)[0]
    );
    setEditando(true);
  };

  if (!editando) {
    return (
      <div>
        <ConfirmDialog />

        <TipoProdutoList
          tipoProduto={tiposProduto}
          onClickAtualizar={onClickAtualizar}
          inserir={inserir}
          editar={editar}
          excluir={excluir}
        />
        <Toast ref={toastRef} />
      </div>
    );
  } else {
    return (
      <div>
        <TipoProdutoForm
          tipoProduto={tipoProduto}
          setTipoProduto={setTipoProduto}
          salvar={salvar}
          cancelar={cancelar}
        />
        <Toast ref={toastRef} />
      </div>
    );
  }
}

export default TipoProdutoCont;
