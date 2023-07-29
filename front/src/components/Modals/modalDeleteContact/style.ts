import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;

  height: 35%;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

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

    button {
      width: 100%;
      border: none;

      padding: 0.3rem;
      border-radius: 8px;

      font-weight: 600;

      padding-top: .5rem;
    }

    .delete {
      color: #ffffff;
      background-color: #c75126;
    }

    .cancel {
      background-color: #ffffff;
      color: #ff0601;
      border: 2px solid #ff0601;
    }
  }

  @media (min-width: 600px) {
    width: 30%;
    height: 35%;
  }
`;
