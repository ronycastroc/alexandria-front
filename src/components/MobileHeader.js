import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import {
  IoBookSharp,
  IoCartOutline,
  IoMenuSharp,
  IoPersonSharp,
  IoCloseSharp,
  IoChevronForwardSharp,
  IoChevronDownSharp,
} from "react-icons/io5";
import { IconContext } from "react-icons";

export default function MobileHeader() {
  const navigate = useNavigate();
  const { cartItens, setCartItens } = useContext(UserContext);
  const [sidebar, setSidebar] = useState(false);
  const [showCategoriesList, setshowCategoriesList] = useState(false);

  useEffect(() => {
    const localStorageCartItens = JSON.parse(localStorage.getItem("CART"));

    if (localStorageCartItens !== null) {
      setCartItens(localStorageCartItens);
    }
  }, [setCartItens]);

  function handleSideBar() {
    setSidebar(!sidebar);
  }

  function handleCategoriesList() {
    setshowCategoriesList(!showCategoriesList);
  }

  return (
    <>
      <Wrapper className="Header" visible={sidebar}>
        <div onClick={() => navigate("/")}>
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "40px",
            }}
          >
            <div>
              <IoBookSharp />
            </div>
          </IconContext.Provider>
        </div>
        <NameContainer>
          <h1>Alexandria</h1>
          <p>BOOKSTORE</p>
        </NameContainer>
        <div onClick={handleSideBar}>
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "40px",
            }}
          >
            <div>
              <IoMenuSharp />
            </div>
          </IconContext.Provider>
        </div>
      </Wrapper>
      <SideBar visible={sidebar}>
        <CloseButton onClick={handleSideBar}>
          <IconContext.Provider
            value={{
              color: "#FFFFFF",
              className: "global-class-name",
              size: "40px",
            }}
          >
            <div>
              <IoCloseSharp />
            </div>
          </IconContext.Provider>
          <div onClick={() => navigate("/signin")}>
            <IconContext.Provider
              value={{
                color: "#FFFFFF",
                className: "global-class-name",
                size: "30px",
              }}
            >
              <div>
                <IoPersonSharp />
              </div>
            </IconContext.Provider>
          </div>
          <LoginAndCartContainer visible={sidebar}>
            <div>
              <IconContext.Provider
                value={{
                  color: "#FFFFFF",
                  className: "global-class-name",
                  size: "40px",
                }}
              >
                <CartContainer onClick={() => navigate("/carrinho")}>
                  <IoCartOutline />
                  <CartNumber>{cartItens.length}</CartNumber>
                </CartContainer>
              </IconContext.Provider>
            </div>
          </LoginAndCartContainer>
        </CloseButton>
        <PageLinks>
          <span onClick={() => navigate("/sobrenos")}>Sobre Nós</span>
          <span onClick={() => navigate("/contato")}>Contato</span>
          <div onClick={handleCategoriesList}>
            <IconContext.Provider
              value={{
                color: "#FFFFFF",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <div>
                {showCategoriesList ? (
                  <IoChevronDownSharp />
                ) : (
                  <IoChevronForwardSharp />
                )}
              </div>
            </IconContext.Provider>
            <span>Categorias</span>
          </div>
          <CategoriesList show={showCategoriesList}>
            <span onClick={() => navigate("/categorias/Fantasia")}>
              Fantasia
            </span>
            <span onClick={() => navigate("/categorias/Terror")}>Terror</span>
            <span onClick={() => navigate("/categorias/Auto-Ajuda")}>
              Auto Ajuda
            </span>
            <span onClick={() => navigate("/categorias/Ficção-Cientifica")}>
              Ficção-Cientifica
            </span>
            <span onClick={() => navigate("/categorias/Romance")}>Romance</span>
          </CategoriesList>
        </PageLinks>
      </SideBar>
    </>
  );
}

const Wrapper = styled.div`
  @media (min-width: 650px) {
    display: none;
  }
  background-color: #0a100d;
  min-height: 80px;
  width: 100%;
  display: flex;
  flex: 0 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 0;
  opacity: ${(props) => (props.visible === true ? "0.5" : "1")}; ;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Qwitcher Grypen", cursive !important;
    font-size: 35px;
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
`;

const SideBar = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #0a100d;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 30px;
  display: ${(props) => (props.visible === true ? "initial" : "none")}; ;
`;

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const LoginAndCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CartContainer = styled.div`
  position: relative;
`;

const CartNumber = styled.div`
  position: absolute;
  background-color: #a22c29;
  top: 0;
  right: -10%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #ffffff;
  font-size: 15px;
`;

const PageLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 30px;
  span {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400px;
    line-height: 40px;
    padding-left: 20px;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      padding-left: 0px;
    }
  }
`;

const CategoriesList = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column !important;
  justify-content: flex-start;
  align-items: flex-start !important;
  span {
    font-family: Roboto;
    line-height: 25px;
    font-size: ${(props) => (props.show === true ? "15px" : "0px")} !important;
  }
`;
