import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductWithID } from "../../service/alexandriaService.js";
import styled from "styled-components";
import Header from "../Header.js";
import Footer from "../Footer.js";
import UserContext from "../../context/UserContext.js";
import SmallCarousel from "../SmallCarousel.js";
import MobileHeader from "../MobileHeader.js";

export default function BookPage() {
  const params = useParams();
  console.log(params)
  const [bookData, setbookData] = useState({});
  const { cartItens, setCartItens } = useContext(UserContext);

  function addBookToCart() {
    const localCartItens = JSON.parse(localStorage.getItem("CART"));
    
    if (localCartItens !== null) {
      if(localCartItens.find(value => value._id === params.bookId)) {
        localCartItens.forEach(value => {
          if(value._id === params.bookId) {
            value.quantity += 1;
          }
        })
        const newCart = [...localCartItens];
        setCartItens(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart));

      } else {
        bookData.quantity = 1
        const newCart = [...cartItens, bookData];
        setCartItens(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart));
      }      

    } else {
      bookData.quantity = 1
      setCartItens([...cartItens, bookData]);
      localStorage.setItem("CART", JSON.stringify([bookData]));
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductWithID(params.bookId)
      .then((res) => {
        setbookData(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar o livro na API com este ID");
      });
  }, [params.bookId]);

  return (
    <Wrapper>
      <Header />
      <MobileHeader/>
      <Container>
          <BookCover>
            <img src={bookData.cover} alt="BookCover" />
          </BookCover>
          <BookInfo>
            <h1>{bookData.title}</h1>
            <p>{bookData.author}</p>
            <h2>{bookData.price}</h2>
            <ButtonsContainer>
              <button onClick={addBookToCart}>Adicionar ao carrinho</button>
              <div>i</div>
            </ButtonsContainer>
          </BookInfo>
        </Container>      

      <h1>Veja mais livros desta categoria:</h1>
      <SmallCarousel id={params.bookId} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  >h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-image: linear-gradient( to top, #b6322e, #a22c29, #79211f );
  padding: 30px 0;
  margin-top: 150px;
  margin-bottom: 50px;
  box-shadow: 0px 2px 47px 5px rgba(0, 0, 0, 0.5);
`;

const BookCover = styled.div`
  width: 300px;
  height: 400px;
  margin-left: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BookInfo = styled.div`
  width: 400px;
  height: 400px;
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 80px;
  h1 {
    font-weight: 700;
    font-size: 35px;
    color: #d6d5c9;
    line-height: 0;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    color: #d6d5c9;
    line-height: 60px;
  }
  h2 {
    font-weight: 700;
    font-size: 25px;
    color: #d6d5c9;
    line-height: 60px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  button {
    margin-right: 25px;
    width: 150px;
    height: 45px;
    border: none;
    background-color: #d6d5c9;
    color: #0a100d;
    border-radius: 20px;
    cursor: pointer;
    background-image: linear-gradient(45deg, #902923 50%, transparent 50%);
    background-position: 100%;
    transition: background 300ms ease-in-out;
    background-size: 400%;

    &:hover {
      background-position: left;
      color: #d6d5c9;
    }
  }

  div {
    border: 1px solid #b9baa3;
    width: 40px;
    color: #b9baa3;
    height: 40px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(45deg, #d6d5c9 50%, transparent 50%);
    background-position: 100%;
    transition: background 300ms ease-in-out;
    background-size: 400%;
    &:hover {
      background-position: left;
      color: #a22c29;
    }
  }
`;
