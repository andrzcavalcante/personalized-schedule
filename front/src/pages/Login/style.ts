import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: row nowrap;

  .section_one {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding: 9.5rem 0.7rem;
    p {
      color: #c75126;
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 18px;
    }
  }

  .section_two {
    display: flex;
    flex-direction: column;

    width: 50%;

    background-color: #c75126;
    padding: 9.5rem 0.7rem;
    p {
      color: #ffffffff;
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 0.9rem;
      line-height: 18px;
    }
  }

  @media (min-width: 600px) {
    .line {
      height: 350px;

      border-right: 3.8px solid #c75126;
      border-radius: 3px;

      position: absolute;
      top: 35%;
      left: 27%;
    }
    .section_one {
      width: 65%;

      p {
        font-size: 1.2rem;
        line-height: 1.6rem;

        color: #363636;

        position: absolute;
        top: 40%;
        left: 30%;

        width: 25%;
      }
    }

    .section_two {
      p {
        font-size: 1.2rem;
        line-height: 1.6rem;

        color: #363636;

        position: absolute;
        top: 75%;
        right: 75%;

        width: 20%;
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;

  position: absolute;
  top: 4.5rem;
  padding-left: 14px;
  width: 100%;
  text-align: center;

  color: #c75126;

  span {
    color: #ffffffff;
  }

  @media (min-width: 600px) {
    top: 15%;
    right: 23%;

    font-size: 3rem;

    span {
      color: #c75126;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;

  width: 65%;
  height: 55%;

  position: fixed;
  top: 40%;
  left: 20%;

  padding: 0.5rem 1.2rem;

  border: 2px solid #c75126;
  border-radius: 8px;

  background-color: #ffffff;

  div {
    width: 100%;
    text-align: center;

    h2 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #c75126;

      padding: 0.5rem 0 1.5rem 0;
    }
  }

  label {
    font-size: 11px;
    font-weight: 500;
  }

  input {
    border: 2px solid #c0c0c0;
    padding: 0.4rem;
    border-radius: 5px;
  }
  input::placeholder {
    font-size: 10px;
  }

  span {
    width: 100%;

    p {
      font-size: 10px;
      width: 100%;
      text-align: end;
      padding-top: 10px;

      a {
        color: #c75126;
        text-decoration: none;
      }
    }
  }

  .toGoRegister{
      width:100%
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 0.5rem 0;
    font-weight: 600;
  }

  .btn_login {
    background-color: #c75126;
    color: #ffffff;

    margin-top: 22px;
  }

  .btn_register {
    background-color: #ffffff;
    color: #c75126;
    border: 2px solid #c75126;

    width:100%;
  }

  .registerLink {
    display: none;
  }

  @media (min-width: 600px) {
    width: 25%;
    height: 55%;

    top: 30%;
    left: 65%;

    .hidden {
      display: none;
    }

    div > h2 {
      color: #ffffff;

      font-size: 2.5rem;

      position: fixed;
      top: 15%;
      right: 20%;
    }

    label {
      font-size: 15px;
    }

    input {
      padding: 0.6rem;
    }

    input::placeholder {
      font-size: 12px;
    }

    button {
      border: none;
      border-radius: 5px;
      padding: 0.5rem 0;
      font-weight: 600;
    }

    .registerLink {
      display: flex;

      font-size: 12px;
      font-weight: 600;

      a {
        text-decoration: none;
        color: #c75126;
      }

      padding-top: 20px;
    }
  }
`;
