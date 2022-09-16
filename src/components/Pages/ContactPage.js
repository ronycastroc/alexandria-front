import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { IoHomeOutline, IoMailOutline, IoCalculatorOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    alert("mensagem enviada");
  }

  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <img
            src="https://img.freepik.com/fotos-gratis/livro-aberto-e-fundo-da-biblia_112554-164.jpg?w=360"
            alt="ContacImg"
          />
          <h1>Contate-nos:</h1>
          <div>
            <FormContainer>
              <form onSubmit={handleFormSubmission}>
                <input
                  name="message"
                  placeholder="Digite sua mensagem aqui"
                  type="text"
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <input
                    name="name"
                    placeholder="Nome"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit">Enviar</button>
              </form>
            </FormContainer>
            <ContactInfoContainer>
              <div>
                <IconContext.Provider
                  value={{
                    color: "#0A100D",
                    className: "global-class-name",
                    size: "30px",
                  }}
                >
                  <div>
                    <IoHomeOutline />
                  </div>
                </IconContext.Provider>
                <p>Brasilia, Brasil</p>
              </div>
              <div>
                <IconContext.Provider
                  value={{
                    color: "#0A100D",
                    className: "global-class-name",
                    size: "30px",
                  }}
                >
                  <div>
                    <IoMailOutline />
                  </div>
                </IconContext.Provider>
                <p>alexandria@lib.com</p>
              </div>
              <div>
                <IconContext.Provider
                  value={{
                    color: "#0A100D",
                    className: "global-class-name",
                    size: "30px",
                  }}
                >
                  <div>
                    <IoCalculatorOutline />
                  </div>
                </IconContext.Provider>
                <p>+55 017 5555-4444</p>
              </div>
            </ContactInfoContainer>
          </div>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 500px;
    height: 300px;
    box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.2);
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 40px;
    text-align: center;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > :nth-child(1) {
      width: 500px;
      height: 200px;
      font-size: 15px;
      border: 1px solid #b9baa3;
      color: #0a100d;
      //cursor: text;
      //text-align: start;
      //white-space: pre-wrap;
      //overflow-wrap: break-word;
    }
    div {
      margin-top: 10px;
      > :nth-child(1) {
        width: 245px;
        height: 50px;
        margin-right: 9px;
      }
      input {
        width: 245px;
        border: 1px solid #b9baa3;
        height: 50px;
        color: #0a100d;
      }
    }
    button {
      width: 100px;
      height: 40px;
      align-self: flex-start;
      margin-top: 10px;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      color: #0a100d;
      transition: all 0.3s ease-out 0s;
      &:hover {
        color: #ffffff;
        background-color: #902923;
      }
    }
  }
`;

const ContactInfoContainer = styled.div`
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  justify-content: flex-start;
  > div {
    margin-top: 20px;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin-left: 10px;
    }
  }
`;
