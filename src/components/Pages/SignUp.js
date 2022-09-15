import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postSignUp } from "../../service/alexandriaService";
import { AuthBox, FormContent } from "./SignIn";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const navigate = useNavigate();

    function sendForm(e) {
        e.preventDefault();

        const body = {
            name,
            email,
            password
        }

        if(password !== confirmPass) {
            setPassword('');
            confirmPass('');
            alert('Senhas não confere, digite novamente!');
            return;
        }

        postSignUp(body)
        .then(() => {
            resetForm();
            navigate('/signin');
        })
        .catch(() => {
            resetForm();
            alert('Algo deu errado, tente novamente.');
            
        })
    }

    function resetForm() {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
    }

    return (
        <AuthBox>

            <h1>Fazer Cadastro</h1>

            <form onSubmit={sendForm}>
                <FormContent>
                    <h2>Insira o seu Nome</h2>
                    <input type="text" name="email" placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />

                    <h2>Insira o seu Email</h2>      
                    <input type="email" name="email" placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <h2>Insira a sua Senha</h2>
                    <input type="password" name="password" placeholder="Senha" 
                    value={password}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <h2>Confirme a sua Senha</h2>
                    <input type="password" name="password" placeholder="Senha" 
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    required
                    />

                    <button>Cadastre-se</button>
                </FormContent>
            </form>

            <p>Já possui uma conta? faça o 
                <Link to={'/signin'}>
                    <span> Login </span>
                </Link>
                aqui.</p>          

        </AuthBox>
    )
}