import { BackGroundStyle } from '../modalUpdateContact/style';
import {Container} from './style';


export const ModalDeleteContact = ({ isOpen, setOpenModalDelete }) => {

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalDelete}>X</button>
                    </span>
                    <h2>Deletar Contato</h2>
                    <p>Deseja deletar Contato?</p>
                    <form action="">
                        <button className='delete'>Sim</button>
                        <button className='cancel' onClick={setOpenModalDelete}>Não</button>
                    </form>

                </Container>
            </BackGroundStyle>
        )
    }
}