import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductWithCategory } from "../../service/alexandriaService.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
import BookBox from "../BookBox.js";
import MobileHeader from "../MobileHeader.js";

export default function CategoriesPage() {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductWithCategory(params.categoria)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar os produtos da API");
      });
  }, [params.categoria]);

  return (
    <Wrapper>
      <Header />
      <MobileHeader/>
      <Container>
        <h1>{params.categoria}</h1>
        <BooksContainer>
          {products.map((product, index) => (
            <BookBox
              key={index}
              author={product.author}
              title={product.title}
              cover={product.cover}
              id={product._id}
              price={product.price}
            />
          ))}
        </BooksContainer>
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
  margin-top: 150px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 650px) {
    margin-top: 50px;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const BooksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  flex-wrap: wrap;
  column-gap: 15px;
  @media (max-width: 650px) {
    width: 300px;
  }
  > div {
    margin-right: 20px;
    width: 250px;
    height: 400px;
    margin-bottom: 20px;
    cursor: pointer;
    h1 {
      margin-bottom: 0px;
    }
    &:hover {
      top: 0;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;
