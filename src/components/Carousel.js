import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import BookBox from "./BookBox";
import { useRef, useCallback } from "react";
import styled from "styled-components";

export default function Caroussel({ products }) {
  const carousel = useRef(null);

  const moveCarousel = useCallback((e, multiplicador) => {
    e.preventDefault();
    const tamanhoTela = carousel.current.offsetWidth;
    const tamanhoLivro = carousel.current.children[0].offsetWidth + 20;
    const scrollAtual = carousel.current.scrollLeft;

    let novoScroll =
      (Math.floor(scrollAtual / tamanhoLivro) + multiplicador) * tamanhoLivro;

    if (tamanhoTela < tamanhoLivro) {
      novoScroll += (tamanhoLivro - tamanhoTela) / 2;
    }
    carousel.current.scrollLeft = novoScroll;
  }, []);

  const handleLeftClick = useCallback(
    (e) => {
      moveCarousel(e, -1);
    },
    [moveCarousel]
  );

  const handleRightClick = useCallback(
    (e) => {
      moveCarousel(e, 1);
    },
    [moveCarousel]
  );

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
`;

const BooksContainer = styled.div`
  width: 1000px;
  height: 500px;
  overflow-x: auto;
  padding: 20px;
  display: flex;
  overflow-y: hidden;
  white-space: nowrap;
  column-gap: 25px;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselButton = styled.div`
  width:55px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
