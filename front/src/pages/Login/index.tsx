import { Link } from "react-router-dom";
import { Container, Logo, Form } from "./style";

export const Login = () => {
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
      <Form action="">
        <div>
          <h2>Login</h2>
        </div>
        <label htmlFor="">Usuário</label>
        <input type="text" placeholder="Digite seu nome de usuário" required/>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite sua senha" required/>
        <span>
          <p>Esqueceu a senha? <a href="">Clique aqui</a></p>
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
