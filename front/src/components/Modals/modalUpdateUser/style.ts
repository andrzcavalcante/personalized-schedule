import { styled } from "styled-components";

export const BackGroundStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #ffffff;

  height: 55%;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;

  span {
    width: 100%;
    text-align: end;
    padding: 0.5rem;

    button {
      font-size: 20px;
      font-weight: 600;

      background-color: #c75126;

      border: none;
      color: #ffffff;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 600;

    padding: 0.5rem 0;

    color: #c75126;
  }

  form {
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 80%;

    input {
      padding: 0.3rem 0.5rem;
      border: none;
      border: 2px solid #c75126;
      border-radius: 8px;
    }

    label {
      font-size: 14px;
      color: #c75126;
    }

    div {
      display: flex;
      justify-content: space-between;

      padding-top: 0.5rem;

      button {
        width: 40%;
        border: none;

        padding: 0.3rem;
        border-radius: 8px;

        font-weight: 600;
      }

      .update {
        color: #ffffff;
        background-color: #c75126;
      }

      .cancel {
        background-color: #ff0601;
        color: #ffffff;
      }
    }
  }

  @media (min-width: 600px) {
    width: 40%;
    height: 50%;
  }
`;
