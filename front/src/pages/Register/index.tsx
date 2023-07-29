
import { Container, Logo, Form } from "./style";

export const Register = () => {
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
          <h2>Register</h2>
        </div>
        <label htmlFor="">Nome completo</label>
        <input type="text" placeholder="Digite seu nome completo" required/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Digite seu email" required/>
        <label htmlFor="">Telefone</label>
        <input type="number" placeholder="Digite seu número de telefone" required/>
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite sua senha" required/>
        <button type="submit" className="btn_register">CADASTRAR</button>
      </Form>
    </Container>
  );
};
