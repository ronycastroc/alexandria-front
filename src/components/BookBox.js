import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BookBox({ author, title, cover, id, price }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/product/${id}`)}>
      <img src={cover} alt="coverImg" />
      <BookInfo>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{price}</p>
      </BookInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 250px;
  height: 400px;
  flex: 0 0;
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  img {
    width: 100%;
    height: 300px;
  }
`;

const BookInfo = styled.div`
  width: 100%;
  height: 20px;
  h1 {
    font-size: 20px !important;
    font-weight: 700;
    color: #0a100d;
    margin: 10px 0;
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
    color: #b9baa3;
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }
  p {
    text-align: right;
    color: #a22c29;
    margin: 5px 0 !important;
    font-weight: 700;
  }
`;
