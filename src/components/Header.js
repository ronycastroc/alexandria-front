import styled from "styled-components";
import { IoBookSharp, IoCartOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { cartItens, setCartItens } = useContext(UserContext);
  const [categoriesBar, setCategoriesBar] = useState(false);

  //localStorage.removeItem("CART")

  useEffect(() => {
    const localStorageCartItens = JSON.parse(localStorage.getItem("CART"));

    if (localStorageCartItens !== null) {
      setCartItens(localStorageCartItens);
    }
  }, [setCartItens]);

  return (
    <Wrapper>
      <LogoContainer onClick={() => navigate("/")}>
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

        <h2 onClick={() => setCategoriesBar(!categoriesBar)}>Categorias</h2>

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
                <CartNumber>{cartItens.length}</CartNumber>
              </div>
            </IconContext.Provider>
          </CartContainer>
        </Link>
        <LoginButton>
          <Link to="/signin">Login</Link>
        </LoginButton>
      </LoginCartContainer>

      <Categories categoriesBar={categoriesBar}>
        <div>
          <Link to="/categorias/Terror">
            <span>Terror</span>
          </Link>
          <Link to="/categorias/Fantasia">
            <span>Fantasia</span>
          </Link>
          <Link to="/categorias/Ficção Cientifica">
            <span>Ficção Cientifica</span>
          </Link>
          <Link to="/categorias/Romance">
            <span>Romance</span>
          </Link>
          <Link to="/categorias/Auto ajuda">
            <span>Auto-ajuda</span>
          </Link>
        </div>
      </Categories>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #0a100d;
  min-height: 80px !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 651px) {
    display: none;
  }
`;

const Categories = styled.div`
  width: 70%;
  height: ${(props) => (props.categoriesBar === false ? "0px" : "40px")};  
  transition: height 0.3s ease-out;  
  background-color: #0a100d;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-image: linear-gradient(to right, #0a100d 50%, #d6d5c9);

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  span {
    color: #ffffff;
    font-weight: 600;
    opacity: ${(props) => (props.categoriesBar === false ? 0 : 1)};
    transition: all 0.1s ease-out;
  }

  a {
    text-decoration: none;
  }
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
      font-weight: 700;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }
    p {
      font-size: 10px;
      color: #ffffff;
      font-weight: 700;
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
  &:hover {
    margin-bottom: 5px;
  }
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
  background: linear-gradient(to left, #a22c29 50%, #902923 50%) right;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s ease-out;
  background-size: 200%;

  &:hover {
    background-position: left;
  }
  a {
    color: #ffffff !important;
  }
`;
