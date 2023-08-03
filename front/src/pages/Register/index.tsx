import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { Container, Logo, Form } from "./style";
import { TRegisterData, registerSchema } from "../../schema/registerSchema";

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const { submitRegister } = useAuth();

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
      <Form onSubmit={handleSubmit(submitRegister)}>
        <div>
          <h2>Register</h2>
        </div>

        <label htmlFor="full_name">Nome completo</label>
        <input
          type="text"
          id="full_name"
          placeholder="Digite seu nome completo"
          required
          {...register("full_name")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          required
          {...register("email")}
        />

        <label htmlFor="phone">Telefone</label>
        <input
          type="text"
          id="phone"
          placeholder="Digite seu número de telefone"
          required
          {...register("phone")}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          required
          {...register("password")}
        />

        <button type="submit" className="btn_register">
          CADASTRAR
        </button>
      </Form>
    </Container>
  );
};
