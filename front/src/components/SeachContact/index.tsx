import { useForm } from "react-hook-form";
import { api } from "../../services/api";


export const SearchContact = ({ setContact }) => {
  const { register, handleSubmit } = useForm();
  const searchContact = async (name) => {
    try {
      const response = await api.get("/contacts");
      const listContact = response.data;
      const result = listContact.filter((contact) => {
        if (contact.full_name === name.full_name) {
          return contact;
        }
      });
      
      result.length > 0 ? setContact(result) : null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(searchContact)} className="search_box">
        <input
          type="text"
          placeholder="Busque seu contato aqui"
          {...register("full_name")}
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
