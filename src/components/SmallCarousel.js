import styled from "styled-components";
import { getProductWithCategory } from "../service/alexandriaService.js";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useEffect, useState, useRef, useCallback } from "react";

export default function SmallCarousel({ category }) {
  const carousel = useRef(null);
  const [products, setProducts] = useState([]);

  const handleLeftClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }, []);

  useEffect(() => {
    getProductWithCategory("Fantasia")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar os produtos da API");
      });
  }, []);

  return (
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
          <div>
            <img src={product.cover} alt="bookCover" />
          </div>
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
  );
}

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 80px;
  margin-top: 20px;
  
`;

const BooksContainer = styled.div`
  width: 1000px;
  height: 350px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  > div {
    display: inline-block;
    margin-right: 20px;
    width: 200px;
    height: 300px;
    cursor: pointer;
    padding: 10px;
    background-color: #ffffff;
    img{
        width: 100%;
        height: 280px;
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
