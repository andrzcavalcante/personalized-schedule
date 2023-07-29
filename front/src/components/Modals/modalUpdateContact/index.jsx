import { Container, BackGroundStyle } from './style'

export const ModalUpdateContact = ({ isOpen , setOpenModalUpdate }) => {

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalUpdate}>X</button>
                    </span>
                    <h2>Atualizar Contato</h2>
                    <form action="">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Novo nome' />
                        <label htmlFor="">Telefone</label>
                        <input type="number" placeholder='Novo telefone' />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Novo email' />
                        <div>
                            <button className='update'>Atualizar</button>
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