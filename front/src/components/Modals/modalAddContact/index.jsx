import { BackGroundStyle } from "../modalUpdateContact/style"
import { Container } from './style';

export const ModalAddContact = ({isOpen, setOpenModalAdd}) => {

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalAdd}>X</button>
                    </span>
                    <h2>Adicionar Contato</h2>
                    <form action="">
                        <label htmlFor="">Nome completo</label>
                        <input type="text" placeholder='Novo nome' />
                        <label htmlFor="">Telefone</label>
                        <input type="number" placeholder='Novo telefone' />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Novo email' />
                        <div>
                            <button className='update'>Atualizar</button>
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