import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import styled from "styled-components";
import BookCart from "../BookCart";
import Footer from "../Footer";
import Header from "../Header";
import { IoArrowUndo } from "react-icons/io5";
import MobileHeader from "../MobileHeader";

export default function Cart() {
    const { cartItens, setCartItens } = useContext(UserContext);
    const localCartItens = JSON.parse(localStorage.getItem("CART")); 
    const subTotal = localCartItens.map(value => (Number(value.price.replace(',', '.').replace('R$', '')) * (value.quantity)))
    .reduce((total, value) => total + value, 0);

    const isUser = JSON.parse(localStorage.getItem('token'));

    const navigate = useNavigate();
    
    function checkOutPage() {
        if (cartItens.length === 0) {
            return alert("Seu carrinho está vazio!");
        }

        if(isUser !== null) {
            navigate(`/checkout/`, {state: subTotal});

        } else {
            alert("Primeiro faça o login");
            navigate("/signin");
        }
    }
    
    return (
        <>
            <Header />
            <MobileHeader/>

            <Wrapper>
                <Infos>
                    <span>Produtos</span>
                    <span>Preço</span>
                    <span>Quantidade</span>
                    <span>Total</span>
                </Infos>                

                <div>
                    {cartItens.length === 0 ? 
                    (<h2>Seu carrinho está vazio!</h2>) 
                    :                    
                    (cartItens.map((value, index) => (
                        <BookCart key={index} cover={value.cover} price={value.price} title={value.title} id={value._id} quantity={value.quantity} setCartItens={setCartItens} />
                    )))}
                </div>
                
                <CheckOut>
                    <p>Subtotal: R${subTotal.toFixed(2)}</p>
                    <div onClick={checkOutPage}>
                        Checkout
                    </div>
                </CheckOut>

                <Link to="/">
                    <IoArrowUndo />
                    Continuar comprando
                </Link>

            </Wrapper>

            <Footer />
        </>
    )
}

const Wrapper = styled.div`
    max-width: 700px;
    min-height: 80vh;
    background-color: #D6D5C9;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 60px;
    padding-bottom: 150px;
    position: relative;

    span {
        font-weight: bold;
    }

    h2 {
        text-align: center;
        margin-top: 100px;
        font-size: 2rem;
        font-weight: bold;
        color: #B9BAA3;
    }

    a {
        position: absolute;
        color: #A22C29;
        left: 30px;
        bottom: 30px;
        margin-left: 20;
    }

`;

const Infos = styled.div`
    display: flex;
    justify-content: space-around;

    span {
        margin-top: 30px;
    }
`;

const CheckOut = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        margin-top: 20px;
        border-radius: 50px;
        color: #D6D5C9;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        background: linear-gradient(to left, #A22C29 50%, #902923 50%) right;
        background-size: 200%;
        transition: .5s ease-out;        
    }

    div:hover {
        background-position: left;
    }

`;