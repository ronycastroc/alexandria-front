import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { postCheckOut } from "../../service/alexandriaService";
import { IoLocationSharp, IoCardSharp, IoArrowUndo } from "react-icons/io5";
import Header from "../Header";
import Footer from "../Footer";

export default function CheckOut() {
    const localCartItens = JSON.parse(localStorage.getItem("CART")); 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [adress, setAdress] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [reference, setReference] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [payment, setPayment] = useState('');
    const [nameCard, setNameCard] = useState('');
    const [numberCard, setNumberCard] = useState('');
    const [validity, setValidity] = useState('');
    const [codeCard, setCodeCard] = useState('');
    const [parcels, setParcels] = useState("1");   
    
    const navigate = useNavigate();
    const location = useLocation();

    const subTotal = location.state;
    const parcelsCard = subTotal / parcels;   
    
    useEffect(() => {
        if(payment === 'debit') {
            setParcels('1');
        }
    },[payment]);

    function sendForm(e) {
        e.preventDefault();
            
        const body = {
            books: localCartItens,
            name,
            phone,
            zipCode,
            adress,
            number,
            complement,
            reference,
            district,
            city,
            state,
            country,
            payment,
            nameCard,
            numberCard,
            validity,
            codeCard,
            parcels,
            subTotal
        }

        postCheckOut(body)
        .then(() => {
            resetForm();
            localStorage.removeItem("CART");
            navigate("/sucess");
        })
        .catch(() => {
            resetForm();
            alert("Algo deu errado! Faça o login e tente novamente!");
            navigate("/signin");
        });        
    }

    function resetForm() {
        setName('');
        setPhone('');
        setZipCode('');
        setAdress('');
        setNumber('');
        setComplement('');
        setReference('');
        setDistrict('');
        setCity('');
        setState('');
        setCountry('');
        setPayment('');
        setNameCard('');
        setNumberCard('');
        setValidity('');
        setCodeCard('');
        setParcels('');
    }

    return (
        <>
            <Header />
                <Wrapper>

                    <form onSubmit={sendForm}>
                    <ShippingData>
                        <div>
                            <IoLocationSharp />
                            <h1>Dados de Entrega</h1>
                        </div>
                        
                        <h2>Nome Completo</h2>
                        <input type="text" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />

                        <h2>Telefone</h2>
                        <input type="number" name="cellphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        />

                        <h2>CEP</h2>
                        <input type="number" name="zipcode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        required
                        />                        
                        
                        <section>
                            <section>
                                <h2>Endereço</h2>
                                <input type="text" name="adress"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                                required
                                />
                            </section>
                            
                            <section>
                                <h2>Número</h2>
                                <input type="number" name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                                />
                            </section>
                            
                        </section>
                        
                        <section>
                            <section>
                                <h2>Complemento</h2>
                                <input type="text" name="complement"
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}                   
                                />
                            </section>

                            <section>
                                <h2>Referência</h2>
                                <input type="text" name="reference"
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                                />
                            </section>
                        </section>

                        <section>
                            <section>
                                <h2>Bairro</h2>
                                <input type="text" name="district"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required
                                />
                            </section>

                            <section>
                                <h2>Cidade</h2>
                                <input type="text" name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                />
                            </section>
                        </section>

                        <section>
                            <section>
                                <h2>Estado</h2>
                                <input type="text" name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                                />
                            </section>

                            <section>
                                <h2>País</h2>
                                <input type="text" name="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                />
                            </section>
                        </section>

                    </ShippingData>

                    <PaymentData>
                        <div>
                            <IoCardSharp />
                            <h1>Dados de Pagamento</h1>
                        </div>

                        <div>
                            <input type="radio" name="payment" value="credit"
                            onChange={(e) => setPayment(e.target.value)}
                            required                                           
                            />
                            <p>Crédito</p>

                            <input type="radio" name="payment" value="debit"
                            onChange={(e) => setPayment(e.target.value)}
                            required
                            />
                            <p>Débito</p>
                        </div>

                        <h2>Nome do Titular do Cartão</h2>
                        <input type="text" name="name-card"
                        value={nameCard}
                        onChange={(e) => setNameCard(e.target.value)}
                        required
                        />

                        <h2>Numero do Cartão</h2>
                        <input type="number" name="number-card"
                        value={numberCard}
                        onChange={(e) => setNumberCard(e.target.value)}
                        required
                        />

                        <h2>Validade</h2>
                        <input type="month" name="validity" id="validity"
                        value={validity}
                        onChange={(e) => setValidity(e.target.value)}
                        required
                        />

                        <h2>Código de Segurança</h2>
                        <input type="number" name="code-card" id="code" min="100" max="999"
                        value={codeCard}
                        onChange={(e) => setCodeCard(e.target.value)}
                        required
                        />

                        <h2>Selecione o Número de Parcelas</h2>
                        <select 
                        onChange={(e) => setParcels(e.target.value)}>
                            {payment === 'credit' ? (
                            <>
                                <option value="1">1x</option>
                                <option value="2">2x</option>
                                <option value="3">3x</option>
                                <option value="4">4x</option>
                                <option value="5">5x</option>
                                <option value="6">6x</option>
                                <option value="7">7x</option>
                                <option value="8">8x</option>
                                <option value="9">9x</option>
                                <option value="10">10x</option>
                                <option value="11">11x</option>
                                <option value="12">12x</option>
                            </>) : 
                            
                            (<option value="1">1x</option>)}
                            
                        </select>                       

                        <h3>{parcels < 2 ? (`Total: R$${subTotal.toFixed(2)}`) : (`Total: ${parcels}x R$${parcelsCard.toFixed(2)}`)}</h3>                     

                        <Link to="/carrinho">
                            <IoArrowUndo />
                            Voltar para o carrinho
                        </Link>

                        <button>Finalizar Compra</button>
                        
                    </PaymentData>
                    </form>

                </Wrapper>

            <Footer />
        </>
    )
}

const Wrapper = styled.div`
    max-width: 1000px;
    background-color: #D6D5C9;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 60px;
    position: relative;

    form {
        display: flex;
    }

    @media (max-width: 500px) {
        form {
            display: flex;
            flex-direction: column;
        }
    }

    input {
        border-radius: 5px;
        border-width: 1px;
    }

    input:focus {
        outline-color: #A22C29;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    #validity {
        width: 120px;
    }

    #code {
        width: 45px;
    }
`;

const ShippingData = styled.div`
    width: 100%;
    min-height: 75vh;
    border-right: 1px solid #B9BAA3;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    div {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;

        h1 {
            font-size: 1.2rem;
            margin-left: 5px;
            font-weight: bold;
        }

    }

    h2:nth-child(2),
    h2:nth-child(4), 
    h2:nth-child(6) {
        margin-left: 20px;
    }

    input {
        margin-bottom: 10px;
        width: 80%;
    }

    input:nth-child(3),
    input:nth-child(5),
    input:nth-child(7) {
        margin-left: 20px;
    }

    section {
        display: flex;

        section {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
        }
    }
    
`;

const PaymentData = styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 10px;

        h1 {
            font-size: 1.2rem;
            margin-left: 5px;
            font-weight: bold;
        }

        p {
            margin-top: 4px;
            margin-right: 10px;
        }

    }

    h2 {
        margin-left: 20px;
    }

    input:nth-child(4), 
    input:nth-child(6), 
    input:nth-child(8), 
    input:nth-child(10), 
    input:nth-child(12) {
        margin-left: 20px;
        width: 80%;
        margin-bottom: 10px;
    }
    
    button {
        position: absolute;
        border: none;
        width: 100px;
        height: 50px;
        border-radius: 50px;
        bottom: 20px;
        right: 20px;
        color: #D6D5C9;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        background: linear-gradient(to left, #A22C29 50%, #902923 50%) right;
        background-size: 200%;
        transition: .5s ease-out;
    }

    button:hover {
        background-position: left;
    }

    a {
        position: absolute;
        color: #A22C29;
        left: 20px;
        bottom: 30px;
        margin-left: 20;
    }

    h3 {
        font-weight: bold;
        margin-left: 20px;
        margin-top: 20px;
    }

    select {
        width: 45px;
        margin-left: 20px;
        border-radius: 5px;
    }
    
    select:focus {
        outline-color: #A22C29;
    }
`;