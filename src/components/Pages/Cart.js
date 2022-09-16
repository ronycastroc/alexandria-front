import { useContext } from "react";
import UserContext from "../../context/UserContext";
import styled from "styled-components";

import Header from "../Header"

export default function Cart() {
    const { cartItens, setCartItens } = useContext(UserContext);

    console.log(cartItens);
    return (
        <>
            <Header />

            <ProductsCart>
                <Infos>
                    <span>Produtos</span>
                    <span>Preço</span>
                    <span>Quantidade</span>
                    <span>Total</span>
                </Infos>
                

                <div>
                    {cartItens.map((value, index) => (
                        <Book key={index} cover={value.cover} price={value.price} title={value.title} id={value._id}/>
                    ))}
                </div>
            </ProductsCart>
        </>
    )
}

function Book({ cover, price, title, id }) {
    return (
        <Wrapper>
            <BookBox>
                <img src={cover} alt="cover" />
                <p>{title}</p>                
            </BookBox>

            <p>{price}</p>

            <input type="number" name="number"/>
            
            <p>{price}</p>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    

    input {
        width: 50px;
        height: 30px;
    }
`;

const BookBox = styled.div`
    width: 70px;
    min-height: 130px;
    padding: 5px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
    }

    p {
        text-align: center;
        margin-top: 5px;
    }
`;

const ProductsCart = styled.div`
    width: 700px;
    min-height: 80vh;
    background-color: #D6D5C9;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 60px;
    padding-bottom: 30px;

`;

const Infos = styled.div`
    display: flex;
    justify-content: space-around;

    span {
        margin-top: 30px;
    }
`;