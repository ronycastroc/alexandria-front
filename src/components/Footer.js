import styled from "styled-components";
import {
  IoBookSharp,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div>
        <LogoContainer onClick={() => navigate("/")}>
          <IconContext.Provider
            value={{
              color: "#0A100D",
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
        <SiteDescription>
          <p>
            Desde 2022 sendo a sua primeira parada quando vai comprar livros, o
            maior acervo do mundo!
          </p>
        </SiteDescription>
        <SocialMediaButtons>
          <div>
            <IconContext.Provider
              value={{
                color: "#0A100D",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <div>
                <IoLogoYoutube />
              </div>
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider
              value={{
                color: "#0A100D",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <div>
                <IoLogoInstagram />
              </div>
            </IconContext.Provider>
          </div>
          <div>
            <IconContext.Provider
              value={{
                color: "#0A100D",
                className: "global-class-name",
                size: "20px",
              }}
            >
              <div>
                <IoLogoFacebook />
              </div>
            </IconContext.Provider>
          </div>
        </SocialMediaButtons>
      </div>
      <CategoriesContainer>
        <div>
          <h1>Categorias:</h1>
        </div>
        <Link to="/categorias/terror">
          <div>
            <p>Terror</p>
          </div>
        </Link>
        <Link to="/categorias/fantasia">
          <div>
            <p>Fantasia</p>
          </div>
        </Link>
        <Link to="/categorias/ficcaocientifica">
          <div>
            <p>Ficção Cientifica</p>
          </div>
        </Link>
        <Link to="/categorias/romance">
          <div>
            <p>Romance</p>
          </div>
        </Link>
        <Link to="/categorias/autoajuda">
          <div>
            <p>Auto-ajuda</p>
          </div>
        </Link>
      </CategoriesContainer>
      <SiteMap>
        <div>
          <h1>Mapa do Site</h1>
        </div>
        <Link to="/">
          <div>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/sobrenos">
          <div>
            <p>Sobre nós</p>
          </div>
        </Link>
        <Link to="/contato">
          <div>
            <p>Contato</p>
          </div>
        </Link>
        <Link to="/blog">
          <div>
            <p>Blog</p>
          </div>
        </Link>
        <Link to="/faqs">
          <div>
            <p>FAQs</p>
          </div>
        </Link>
      </SiteMap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: #b9baa3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px -2px 4px rgb(0 0 0 / 15%);
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
      color: #0a100d;
      margin-bottom: 0px;
    }
    p {
      font-size: 10px;
      color: #0a100d;
      margin-bottom: 10px;
    }
  }
`;

const SiteDescription = styled.div`
  width: 250px;
  text-align: center;
  margin-top: 5px;
`;

const SocialMediaButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  div {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #d6d5c9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #902923;
    }
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-bottom: 10px !important;
    text-decoration: none;
  }
  p {
    color: #0a100d;
    cursor: pointer;
    &:hover {
      color: #902923;
    }
  }
  div {
    margin-top: 15px;
  }
`;

const SiteMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    margin-bottom: 10px !important;
    text-decoration: none;
  }
  p {
    color: #0a100d;
    cursor: pointer;
    &:hover {
      color: #902923;
    }
  }
  div {
    margin-top: 15px;
  }
`;
