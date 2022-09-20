import styled from "styled-components";

export default function Book({ cover, price, title, quantity, id, setCartItens }) {    
    const value = price.replace(',', '.');
    const total = value.replace('R$', '') * quantity;
    const localCartItens = JSON.parse(localStorage.getItem("CART"));

    function plusBook() { 
        localCartItens.forEach(value => {
            if(value._id === id) {
              value.quantity += 1;
            }
          })
        const newCart = [...localCartItens];
        setCartItens(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart));
    }

    function minusBook() { 
        localCartItens.forEach(value => {
            if(value._id === id) {
              value.quantity -= 1;
            }
          })
        const newCart = [...localCartItens];
        setCartItens(newCart);
        localStorage.setItem("CART", JSON.stringify(newCart));

        if(localCartItens.find(value => value.quantity === 0)) {
            const newIntens = localCartItens.filter(value => value.quantity > 0);
            const newCart = [...newIntens];            
            setCartItens(newCart);
            localStorage.setItem("CART", JSON.stringify(newCart));
        }
    }

    return (
        <Wrapper>
            <BookBox>
                <img src={cover} alt="cover" />
                <p>{title}</p>                
            </BookBox>

            <p>{value}</p>

            <QuantityBox>                
                <Quantity>{quantity}</Quantity>

                <PlusMinus>
                    <div onClick={plusBook}>+</div>
                    <div onClick={minusBook}>-</div>
                </PlusMinus>
                
            </QuantityBox>
            
            <p>R${total.toFixed(2)}</p>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
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
    box-shadow: 4px 4px 6px 3px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
    }

    p {
        text-align: center;
        margin-top: 5px;
    }
`;

const QuantityBox = styled.div`
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;    
`;

const Quantity = styled.div`
    background-color: white;
    width: 30px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
`;

const PlusMinus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    background-color: #A22C29;
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;

    div {
        font-size: 18px;
    }
`;