import styled from "styled-components";
import { IoBookSharp, IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

export default function Header() {
  function navigateHome() {
    return "ola";
  }

  return (
    <Wrapper>
      <LogoContainer onClick={() => navigateHome()}>
        <IconContext.Provider
          value={{
            color: "#FFFFFF",
            className: "global-class-name",
            size: "60px",
          }}
        >
          <div>
            <IoBookSharp />
          </div>
        </IconContext.Provider>
        <div>
          <h1>Alexandria</h1>
          <p>BOOKSTORE</p>
        </div>
      </LogoContainer>
      <InfoContainer>
        <Link to="/sobrenos">
          <h2>Sobre nós</h2>
        </Link>
        <Link to="/categorias">
          <h2>Categorias</h2>
        </Link>
        <Link to="/contato">
          <h2>Contato</h2>
        </Link>
      </InfoContainer>
      <LoginCartContainer>
        <Link to="/carrinho">
          <CartContainer>
            <IconContext.Provider
              value={{
                color: "#FFFFFF",
                className: "global-class-name",
                size: "35px",
              }}
            >
              <div>
                <IoCartOutline />
                <CartNumber>{0}</CartNumber>
              </div>
            </IconContext.Provider>
          </CartContainer>
        </Link>
        <LoginButton>
          <Link to="/login">Login</Link>
        </LoginButton>
      </LoginCartContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #0a100d;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    h1 {
      font-family: "Qwitcher Grypen", cursive !important;
      font-size: 50px;
      color: #ffffff;
    }
    p {
      font-size: 10px;
      color: #ffffff;
      margin-bottom: 10px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  cursor: pointer;
  h2 {
    font-size: 17px;
    color: #ffffff;
    &:hover {
      font-size: 20px;
    }
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
`;

const CartNumber = styled.div`
  position: absolute;
  background-color: #a22c29;
  top: 5%;
  right: -10%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  color: #ffffff;
  font-size: 10px;
  &:hover {
    top: 0;
    background-color: #902923;
  }
`;

const LoginCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

const LoginButton = styled.div`
  width: 80px;
  height: 30px;
  background-color: #a22c29;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #902923;
  }
  a {
    color: #ffffff !important;
  }
`;
