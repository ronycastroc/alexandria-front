import styled from "styled-components";
import Header from "../Header";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useRef, useCallback, useEffect, useState } from "react";
import BookBox from "../BookBox";
import Footer from "../Footer";
import { getProductsFromAPI } from "../../service/alexandriaService";

export default function Home() {
  const carousel = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromAPI()
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        //alert("Erro ao buscar os produtos da API");
      });
  }, [getProductsFromAPI]);

  const handleLeftClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }, []);

  return (
    <Wrapper>
      <Header />
      <Container>
        <h1>Nosso acervo</h1>
        <Carousel>
          <CarouselButton onClick={(e) => handleLeftClick(e)}>
            <IconContext.Provider
              value={{
                color: "#0A100D",
                className: "global-class-name",
                size: "60px",
              }}
            >
              <div>
                <IoChevronBackSharp />
              </div>
            </IconContext.Provider>
          </CarouselButton>
          <BooksContainer ref={carousel}>
            {products.map((product) => (
              <BookBox
                author={product.author}
                title={product.title}
                cover={product.cover}
                id={product._id}
                price={product.price}
              />
            ))}
          </BooksContainer>
          <CarouselButton onClick={(e) => handleRightClick(e)}>
            <IconContext.Provider
              value={{
                color: "#0A100D",
                className: "global-class-name",
                size: "60px",
              }}
            >
              <div>
                <IoChevronForwardSharp />
              </div>
            </IconContext.Provider>
          </CarouselButton>
        </Carousel>
        {/* <Footer /> */}
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BooksContainer = styled.div`
  width: 1000px;
  height: 500px;
  overflow-x: auto;
  padding: 20px;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  > div {
    display: inline-block;
    margin-right: 20px;
    width: 250px;
    height: 400px;
    cursor: pointer;
    h1 {
      margin-bottom: 0px;
    }
    &:hover {
      top: 0;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselButton = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
