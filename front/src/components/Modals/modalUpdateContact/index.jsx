import { Container, BackGroundStyle } from './style'
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateContactSchema } from '../../../schema/updateContactSchema';
import { ContactContext } from '../../../providers/ContactProvider'


export const ModalUpdateContact = ({ isOpen, setOpenModalUpdate, contactId }) => {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(updateContactSchema)
    })

    const { submitDetails } = useContext(ContactContext)

    const onSub = (data)=>{
        submitDetails(data, contactId)
    }

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalUpdate}>X</button>
                    </span>
                    <h2>Atualizar Contato</h2>
                    <form onSubmit={handleSubmit(onSub)}>
                        <label htmlFor="full_name">Nome completo</label>
                        <input type="text" placeholder='Novo nome' {...register("full_name")} />
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Novo email' {...register("email")} />
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" placeholder='Novo telefone' {...register("phone")} />
                        <div>
                            <button type='submit' className='update'>Atualizar</button>
                            <button className='cancel' onClick={setOpenModalUpdate}>Cancelar</button>
                        </div>
                    </form>
                </Container>
            </BackGroundStyle>
        )
    } else {
        return null
    }

}