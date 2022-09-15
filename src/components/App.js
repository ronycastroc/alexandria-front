import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./Pages/teste";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sobrenos" element={<Teste />} />
          <Route path="/carrinho" element={<Teste />} />
          <Route path="/categorias" element={<Teste />} />
          <Route path="/contato" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
