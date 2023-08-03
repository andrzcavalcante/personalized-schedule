import { Container, BackGroundStyle } from './style'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from '../../../schema/updateUserSchema';
import { useAuth } from '../../../hooks/useAuth'

export const ModalUpdateUser = ({ isOpen , setOpenModalUpdateUser, userId }) => {

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(updateUserSchema)
    })
    
    const {updateUser} = useAuth()

    const onSub = (data)=>{
        updateUser(data, userId)
    }

    if (isOpen) {
        return (
            <BackGroundStyle>
                <Container>
                    <span>
                        <button onClick={setOpenModalUpdateUser}>X</button>
                    </span>
                    <h2>Atualizar seu dados</h2>
                    <form onSubmit={handleSubmit(onSub)}>
                        <label htmlFor="full_name">Nome</label>
                        <input type="text" placeholder='Novo nome' {...register("full_name")}/>
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" placeholder='Novo telefone' {...register("phone")}/>
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder='Nova senha'  {...register("password")}/>
                        <div>
                            <button className='update'>Atualizar</button>
                            <button className='cancel' onClick={setOpenModalUpdateUser}>Cancelar</button>
                        </div>
                    </form>
                </Container>
            </BackGroundStyle>
        )
    } else {
        return null
    }

}