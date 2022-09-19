import styled from "styled-components";
import {
  getProductWithCategory,
  getProductWithID,
} from "../service/alexandriaService.js";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function SmallCarousel({ id }) {
  const carousel = useRef(null);
  const [products, setProducts] = useState([]);
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const handleLeftClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }, []);

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }, []);

  const feedSmallCarousel = useCallback(
    (book) => {
      getProductWithCategory(book.category)
        .then((res) => {
          const allBooks = res.data;
          const removeDisplayedBook = allBooks.filter(
            (book) => book._id !== id
          );
          setProducts(removeDisplayedBook);
        })
        .catch((err) => {
          alert("Erro ao alimentar o carrosel peq");
          console.error(err.message);
        });
    },
    [id]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductWithID(id)
      .then((res) => {
        setBook(res.data);
        feedSmallCarousel(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar o livro na API com este ID");
      });
  }, [feedSmallCarousel, id]);

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
          <div key={index} onClick={() => navigate(`/product/${product._id}`)}>
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
    img {
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
