import { zodResolver } from "@hookform/resolvers/zod";
import { BackGroundStyle } from "../modalUpdateContact/style"
import { Container } from './style';
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { ContactContext } from '../../../providers/ContactProvider'
import { dataContactSchema } from "../../../schema/dataContactSchema"

export const ModalAddContact = ({ isOpen, setOpenModalAdd }) => {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(dataContactSchema)
    })

    const { createContact } = useContext(ContactContext)
   
    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalAdd}>X</button>
                    </span>
                    <h2>Adicionar Contato</h2>
                    <form onSubmit={handleSubmit(createContact)}>
                        <label htmlFor="full_name">Nome completo</label>
                        <input type="text" id="full_name" placeholder='Novo nome' {...register("full_name")} />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder='Novo email' {...register("email")} />
                        <label htmlFor="">Telefone</label>
                        <input type="text" id="phone" placeholder='Novo telefone' {...register("phone")} />
                        <div>
                            <button type="submit" className='update'>Criar</button>
                            <button className='cancel' onClick={setOpenModalAdd}>Cancelar</button>
                        </div>
                    </form>
                </Container>
            </BackGroundStyle>
        )
    } else {
        return null
    }
}