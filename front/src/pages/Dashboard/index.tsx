import { Container, Header } from "./style";
import { BiUserCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { ModalUpdateContact } from "../../components/Modals/modalUpdateContact";
import { ModalDeleteContact } from "../../components/Modals/modalDeleteContact";
import { ModalAddContact } from "../../components/Modals/modalAddContact";
import { ModalUpdateUser } from "../../components/Modals/modalUpdateUser";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);

  return (
    <Container>
      <Header>
        <Link to={`/`} className="logout hidden">
          <button>Sair</button>
        </Link>
        <div className="profile_user">
          <div className="icon_user">
            <BiUserCircle size={35} />
          </div>
          <h2>Olá, André Cavalcante</h2>
        </div>
        <div className="update_box hidden">
          <div>
            <h2>Seus dados</h2>
          </div>
          <p>
            Nome: <span>Igor</span>
          </p>
          <p>
            Telefone: <span>8299999999</span>
          </p>
          <p>
            Email: <span>igor@mail.com</span>
          </p>
          <button onClick={() => setOpenModalUpdateUser(true)}>
            ATUALIZAR DADOS
          </button>
        </div>
        <div className="hidden_desktop">
          <FiMenu size={30} />
        </div>
      </Header>
      <section>
        <div className="search_box">
          <input type="text" placeholder="Busque seu contato aqui" />
          <button>Buscar</button>
        </div>
        <div className="header_list_contact">
          <h2>Lista de contatos</h2>
          <div>
            <button type="button" onClick={() => setOpenModalAdd(true)}>
              +
            </button>
            <p>Add Contato</p>
          </div>
        </div>
        <div className="box_cards">
          <ul>
            <li className="card">
              <div>
                <p>
                  Nome: <span>Igor</span>
                </p>
                <p>
                  Telefone: <span>8299999999</span>
                </p>
                <p>
                  Email: <span>igor@mail.com</span>
                </p>
                <div className="buttons_card">
                  <button onClick={() => setOpenModalUpdate(true)}>
                    Atualizar
                  </button>
                  <button
                    className="remove"
                    onClick={() => setOpenModalDelete(true)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
            <li className="card">
              <div>
                <p>
                  Nome: <span>Igor</span>
                </p>
                <p>
                  Telefone: <span>8299999999</span>
                </p>
                <p>
                  Email: <span>igor@mail.com</span>
                </p>
                <div className="buttons_card">
                  <button onClick={() => setOpenModalUpdate(true)}>
                    Atualizar
                  </button>
                  <button
                    className="remove"
                    onClick={() => setOpenModalDelete(true)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
            <li className="card">
              <div>
                <p>
                  Nome: <span>Igor</span>
                </p>
                <p>
                  Telefone: <span>8299999999</span>
                </p>
                <p>
                  Email: <span>igor@mail.com</span>
                </p>
                <div className="buttons_card">
                  <button onClick={() => setOpenModalUpdate(true)}>
                    Atualizar
                  </button>
                  <button
                    className="remove"
                    onClick={() => setOpenModalDelete(true)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
            <li className="card">
              <div>
                <p>
                  Nome: <span>Igor</span>
                </p>
                <p>
                  Telefone: <span>8299999999</span>
                </p>
                <p>
                  Email: <span>igor@mail.com</span>
                </p>
                <div className="buttons_card">
                  <button onClick={() => setOpenModalUpdate(true)}>
                    Atualizar
                  </button>
                  <button
                    className="remove"
                    onClick={() => setOpenModalDelete(true)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <ModalUpdateContact
        isOpen={openModalUpdate}
        setOpenModalUpdate={() => setOpenModalUpdate(!openModalUpdate)}
      />
      <ModalDeleteContact
        isOpen={openModalDelete}
        setOpenModalDelete={() => setOpenModalDelete(!openModalDelete)}
      />
      <ModalAddContact
        isOpen={openModalAdd}
        setOpenModalAdd={() => setOpenModalAdd(!openModalAdd)}
      />
      <ModalUpdateUser
        isOpen={openModalUpdateUser}
        setOpenModalUpdateUser={() =>
          setOpenModalUpdateUser(!openModalUpdateUser)
        }
      />
    </Container>
  );
};
