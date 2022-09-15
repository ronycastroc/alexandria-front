import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignIn } from "../../service/alexandriaService";
import styled from "styled-components";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    postSignIn(body)
      .then((res) => {
        resetForm();
        localStorage.setItem("name", JSON.stringify(res.data.name));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      })
      .catch(() => {
        resetForm();
        alert("Seu email ou senha estão incorretos, digite novamente.");
      });
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <AuthBox>
      <h1>Fazer Login</h1>

      <form onSubmit={sendForm}>
        <FormContent>
          <h2>Insira o seu Email</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h2>Insira a sua Senha</h2>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button>Login</button>
        </FormContent>
      </form>

      <p>
        Não tem uma conta?
        <Link to={"/signup"}>
          <span> Cadastre-se </span>
        </Link>
        aqui.
      </p>
    </AuthBox>
  );
}

const AuthBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
  width: 50vw;
  min-height: 80vh;

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
    font-weight: 500;
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 100px;
  }

  span {
    color: #a22c29;
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
    height: 45px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-width: 1px;
    font-size: 1rem;
  }

  input:focus {
    outline-color: #a22c29;
  }

  input::placeholder {
    color: #bdbdbd;
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
    color: #d6d5c9;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    background: linear-gradient(to left, #a22c29 50%, #902923 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;
  }

  button:hover {
    background-position: left;
  }
`;

export { AuthBox, FormContent };
