import { BackGroundStyle } from '../modalUpdateContact/style';
import {Container} from './style';
import { useAuth } from '../../../hooks/useAuth';

export const ModalDeleteUser = ({ isOpen, setOpenModalDeleteUser, userId }) => {

    const {deleteUser} = useAuth()

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalDeleteUser}>X</button>
                    </span>
                    <h2>Deletar sua conta?</h2>
                    <form>
                        <button onClick={()=> deleteUser(userId)} className='delete'>Sim</button>
                        <button className='cancel' onClick={setOpenModalDeleteUser}>Não</button>
                    </form>

                </Container>
            </BackGroundStyle>
        )
    }
}