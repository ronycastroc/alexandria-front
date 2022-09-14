import styled from "styled-components";
import Header from "../Header";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useRef, useCallback } from "react";

export default function Home() {
  const carousel = useRef(null);

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
      <Header></Header>
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
      </Container>
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
  height: 400px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
`;

const BooksContainer = styled.div`
  background-color: blue;
  width: 1000px;
  height: 200px;
  overflow-x: auto;
  padding: 20px;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  div {
    display: inline-block;
    margin-right: 15px;
    width: 200px;
    height: 150px;
    background-color: orange;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CarouselButton = styled.div`
  width: 100px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
