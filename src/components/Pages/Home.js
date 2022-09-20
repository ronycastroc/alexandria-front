import styled from "styled-components";
import Header from "../Header";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import { getProductsFromAPI } from "../../service/alexandriaService";
import MobileHeader from "../MobileHeader";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromAPI()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar os produtos da API");
      });
  }, []);

  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <Container>
        <h1>Nosso acervo</h1>
        <Carousel products={products} />
      </Container>
      <Footer />
    </Wrapper>
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
`;

const Container = styled.div`
  width: 100%;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  > h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  @media (max-width: 650px) {
    margin-top: 130px;
  }
`;
