import { Link } from "react-router-dom";
import { Container, Logo, Form } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginData, loginSchema } from "../../schema/loginSchema";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {

  const {register, handleSubmit} = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const {signIn} = useAuth()

  return (
    <Container>
        <Logo>
          Sched<span>ulesUp</span>
        </Logo>
      <section className="section_one">
        <p>
          Tenha controle de todos os seus contatos, de forma rápida, fácil e
          segura.
        </p>
      </section>
      <span className="line"></span>
      <section className="section_two">
        <p>O melhor software de agenda de contatos está aqui.</p>
      </section>
      <Form onSubmit={handleSubmit(signIn)}>
        <div>
          <h2>Login</h2>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Digite seu nome de usuário" required {...register("email")}/>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha" required {...register("password")}/>
        <span>
          <p>Esqueceu a senha? <a>Clique aqui</a></p>
        </span>
        <button type="submit" className="btn_login">Entrar</button>
        <Link to={`/Register`} className="toGoRegister">
          <button type="submit" className="btn_register hidden">Registre-se</button>
        </Link>
        <p className="registerLink">Novo usuário?<Link to={`/Register`}> Crie uma conta.</Link></p>
      </Form>
    </Container>
  );
};
