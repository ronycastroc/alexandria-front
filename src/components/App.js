import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./Pages/teste";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BookPage from "./Pages/BookPage";

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
          <Route path="/product/:bookId" element={<BookPage />} />
          <Route path="/carrinho" element={<Teste />} />
          <Route path="/categorias" element={<Teste />} />
          <Route path="/contato" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
