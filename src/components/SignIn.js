import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignIn() {

    function sendForm() {
        alert('oi');
    }

    return (
        <AuthBox>

            <h1>Fazer Login</h1>

            <form onSubmit={sendForm}>
                <FormContent>
                    <h2>Insira o seu Email</h2>      
                    <input type="email" name="email" placeholder="Email" />

                    <h2>Insira a sua Senha</h2>
                    <input type="password" name="password" placeholder="Senha" />

                    <button>Login</button>
                </FormContent>
            </form>

            <p>Não tem uma conta? 
                <Link to={'/signup'}>
                    <span> Cadastre-se </span>
                </Link>
                aqui.</p>          

        </AuthBox>
    )
}

const AuthBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
    width: 50vw;
    height: 80vh;

    @media (max-width: 650px) {
        width: 90vw;
    }

    h1 {
        text-align: center;
        margin-top: 80px;
        margin-bottom: 30px;
        font-size: 2rem;
        font-weight: 700;
    }

    h2 {
        margin-bottom: 5px;
        font-weight: 600;
    }

    p {
        margin-top: 10px;
        font-size: 1rem;
        text-align: center;
    }

    span {
        color: #A22C29;
    }

    a {
        text-decoration: none;
    }

`;

const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    input {
        height: 50px;
        margin-bottom: 10px;
        border-radius: 5px;
        border-width: 1px;
        font-size: 1rem;
    }

    input:focus {
        outline-color: #A22C29;
    }

    input::placeholder {
        color: #BDBDBD;
        padding-left: 10px;
    }

    button {
        position: absolute;
        border: none;
        width: 100px;
        height: 50px;
        border-radius: 5px;
        bottom: 40px;
        right: 40px;
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

`;

