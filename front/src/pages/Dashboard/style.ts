import { styled } from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 90vh;

  section {
    height: 60vh;

    padding: 0 1rem;
    margin-top: 30px;

    .search_box {
      width: 100%;
      display: flex;
      align-items: center;
      border: 3px solid #c75126;
      border-radius: 12px;
      margin-bottom: 20px;

      input {
        width: 80%;

        padding: 0.3rem;
        border-radius: 12px;
        border: none;
      }

      input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
      }

      button {
        width: 30%;

        padding: 0.3rem;
        border-radius: 8px;
        border: none;

        background-color: #c75126;
        color: #ffffff;

        font-weight: 600;
      }
    }

    .header_list_contact {
      display: flex;
      gap: 0.8rem;
      justify-content: space-around;
      align-items: center;

      padding-bottom: 20px;

      width: 100%;
      height: 15%;

      h2 {
        display: flex;
        justify-content: center;

        font-size: 20px;
        font-weight: 600;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      button {
        height: 35px;
        width: 40px;

        font-size: 20px;
        font-weight: 600;

        color: #c75126;

        background-color: #ffffff;
        border: 2px solid #c75126;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        font-weight: 600;
        font-size: 12px;
      }
    }
  }

  .box_cards {
    /* border: 2px solid #000; */

    height: 100%;
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      padding: 0.5rem;

      width: 100%;
      height: 100%;

      overflow: auto;
    }

    .card {
      height: 42%;
      width: 100%;

      border-radius: 10px;

      background-color: #c75126;

      div {
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        padding: 0.8rem 0.5rem 0.5rem 0.5rem;

        p {
          font-size: 14px;
          font-weight: 600;

          span {
            color: #ffffff;

            font-size: 15px;
            font-weight: 500;
          }
        }

        .buttons_card {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 1rem;
        }

        button {
          color: #c75126;

          width: 40%;
          height: 85%;

          font-weight: 600;

          border-radius: 12px;
          border: none;

          padding: 0.1rem 0;
        }

        .remove {
          background-color: #ff0601;
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 600px) {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;

    section {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .search_box {
        width: 75%;

        input {
          padding: 0.5rem;
        }

        button {
          padding: 0.5rem;
        }
      }

      .box_cards {
        ul {
          padding: 1rem 0.5rem;

          width: 100%;
          height: 100%;

          overflow: auto;
        }

        .card {
          height: 180px;
          width: 260px;

          div {
            justify-content: center;
            gap: 0.8rem;
            padding: 0.5rem 1rem;

            p {
              font-size: 14px;
              font-weight: 600;

              span {
                color: #ffffff;

                font-size: 15px;
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 13vh;

  background-color: #c75126;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;

  .profile_user {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 12px;
      font-weight: 600;

      color: #ffffff;
    }
  }

  .icon_user {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: 2px solid #ffffff;
  }

  .hidden {
    display: none;
  }

  @media (min-width: 600px) {
    width: 40%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    .logout {
      position: fixed;
      top: 10px;
      right: 10px;

      display: block;
      button {
        padding: 0.6rem 1.2rem;

        font-size: 18px;
        font-weight: 600;

        color: #c75126;

        border: none;
        border-radius: 10px;
      }
    }

    .hidden_desktop {
      display: none;
    }

    padding-top: 7%;

    .profile_user {
      width: 60%;
      justify-content: space-between;

      h2 {
        font-size: 20px;
      }
    }

    .icon_user {
      width: 70px;
      height: 70px;
    }

    .update_box {
      background-color: #ffffff;
      padding: 1.5rem 0.8rem;

      width: 45%;
      height: 55%;

      border-radius: 12px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      position: relative;
      bottom: 20%;

      div > h2 {
        text-align: center;
        padding: 0.5rem;

        font-size: 18px;
        font-weight: 600;
      }

      p {
        font-weight: 600;

        span {
          color: #c75126;
          font-weight: 500;
        }
      }

      button {
        color: #c75126;

        font-weight: 600;

        border-radius: 12px;
        border: none;

        padding: 0.4rem 0;

        border: 2px solid #c75126;
      }
    }
  }
`;
