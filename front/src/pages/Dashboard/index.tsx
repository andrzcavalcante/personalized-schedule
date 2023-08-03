import { Container, Header, Menu } from "./style";
import { BiUserCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { ModalAddContact } from "../../components/Modals/modalAddContact";
import { ModalUpdateUser } from "../../components/Modals/modalUpdateUser";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { useAuth } from "../../hooks/useAuth";
import { AuthContext } from "../../providers/AuthProvider";
import { api } from "../../services/api";
import { ModalDeleteUser } from "../../components/Modals/modalDeleteUser";
import { SearchContact } from "../../components/SeachContact";

export interface Contact {
  id: string;
  full_name: string;
  email: string;
  phone: string;
}

export const Dashboard = () => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalDeleteUser, setOpenModalDeleteUser] = useState(false);
  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [menuMobile, setMenuMobile] = useState(false);
  const { logout } = useAuth();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const listContact = async () => {
      try {
        const response = await api.get("/contacts");

        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    listContact();
  }, []);

  return (
    <Container>
      <Header>
        <Link onClick={logout} to={`/`} className="logout hidden">
          <button>Sair</button>
        </Link>
        <div className="box_header">
          <div className="profile_user">
            <div className="icon_user">
              <BiUserCircle size={35} />
            </div>
            <h2>Olá, {user.full_name}</h2>
          </div>
          <div className="update_box hidden">
            <div>
              <h2>Seus dados</h2>
            </div>
            <p>
              Nome: <span>{user.full_name}</span>
            </p>
            <p>
              Telefone: <span>{user.phone}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
            <div className="buttons_profile">
              <button
                className="update"
                onClick={() => setOpenModalUpdateUser(true)}
              >
                ATUALIZAR DADOS
              </button>
              <button
                className="delete"
                onClick={() => setOpenModalDeleteUser(true)}
              >
                DELETAR CONTA
              </button>
            </div>
          </div>
          <div
            onClick={() => setMenuMobile(!menuMobile)}
            className="hidden_desktop"
          >
            {menuMobile ? <GrClose size={28} /> : <FiMenu size={30} />}
          </div>
        </div>
        {menuMobile ? (
          <>
            <Menu>
              <span onClick={() => setOpenModalUpdateUser(true)}>
                Atualizar dados
              </span>
              <span onClick={() => setOpenModalDeleteUser(true)}>
                Deletar conta
              </span>
              <span onClick={logout}>Logout</span>
            </Menu>
          </>
        ) : null}
      </Header>
      <section>
        <SearchContact setContact={setContacts} />
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
          {contacts.length > 0 ? (
            <ul>
              {contacts.map((contact) => (
                <Card key={contact.id} contact={contact} />
              ))}
            </ul>
          ) : (
            <div className="listEmpty">
              <p>Você não possue contatos</p>
            </div>
          )}
        </div>
      </section>

      <ModalAddContact
        isOpen={openModalAdd}
        setOpenModalAdd={() => setOpenModalAdd(!openModalAdd)}
      />
      <ModalUpdateUser
        isOpen={openModalUpdateUser}
        setOpenModalUpdateUser={() =>
          setOpenModalUpdateUser(!openModalUpdateUser)
        }
        userId={user.id}
      />
      <ModalDeleteUser
        isOpen={openModalDeleteUser}
        setOpenModalDeleteUser={() =>
          setOpenModalDeleteUser(!openModalDeleteUser)
        }
        userId={user.id}
      />
    </Container>
  );
};
