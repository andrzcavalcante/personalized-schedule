import { ReactNode, createContext } from "react";
import { api } from "../services/api";

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext({});

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const submitDetails = async (data, contact) => {
    try {
      await api.patch(`/contacts/${Number(contact)}`, data);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const submitDelete = async (contact) => {
    try {
      await api.delete(`/contacts/${Number(contact)}`);
    } catch (error) {
      console.log(error);
    }
  };

  const createContact = async (data) => {
    try {
      await api.post("/contacts", data);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <ContactContext.Provider
      value={{
        submitDetails,
        submitDelete,
        createContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
