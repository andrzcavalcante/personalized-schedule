import { Dispatch, useState } from "react";
import { Contact } from "../../pages/Dashboard";
import { ModalUpdateContact } from "../../components/Modals/modalUpdateContact";
import { ModalDeleteContact } from "../../components/Modals/modalDeleteContact";


interface CardProps {
  contact: Contact;
  /* setContact: Dispatch<React.SetStateAction<Contact[]>>; */
}

export const Card = ({ contact,/*  setContact  */}: CardProps) => {
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  return (
    <>
      <li className="card" key={contact.id}>
        <div>
          <p>
            Nome: <span>{contact.full_name}</span>
          </p>
          <p>
            Telefone: <span>{contact.phone}</span>
          </p>
          <p>
            Email: <span>{contact.email}</span>
          </p>
          <div className="buttons_card">
            <button onClick={() => setOpenModalUpdate(true)}>Atualizar</button>
            <button className="remove" onClick={() => setOpenModalDelete(true)}>
              Excluir
            </button>
          </div>
        </div>
      </li>
      <ModalUpdateContact
        isOpen={openModalUpdate}
        setOpenModalUpdate={() => setOpenModalUpdate(!openModalUpdate)}
        contactId={contact.id}
      />
      <ModalDeleteContact
        isOpen={openModalDelete}
        setOpenModalDelete={() => setOpenModalDelete(!openModalDelete)}
        contactId={contact.id} 
        contactName={contact.full_name}
      />
    </>
  );
};
