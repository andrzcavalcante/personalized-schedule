import { BackGroundStyle } from '../modalUpdateContact/style';
import {Container} from './style';
import React, { useContext } from 'react'
import { ContactContext } from '../../../providers/ContactProvider'


export const ModalDeleteContact = ({ isOpen, setOpenModalDelete, contactId, contactName }) => {

    const { submitDelete } = useContext(ContactContext)

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalDelete}>X</button>
                    </span>
                    <h2>Deletar Contato</h2>
                    <p>Deseja deletar {contactName}?</p>
                    <form>
                        <button onClick={submitDelete(contactId)} className='delete'>Sim</button>
                        <button className='cancel' onClick={setOpenModalDelete}>Não</button>
                    </form>

                </Container>
            </BackGroundStyle>
        )
    }
}