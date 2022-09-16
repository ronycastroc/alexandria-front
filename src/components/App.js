import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./Pages/teste";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BookPage from "./Pages/BookPage";
import UserContext from "../context/UserContext.js";
import Cart from "./Pages/Cart";
import { useState } from "react";
import AboutUs from "./Pages/AboutUs";

export default function App() {
  const [cartItens, setCartItens] = useState([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ cartItens, setCartItens }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sobrenos" element={<AboutUs />} />
            <Route path="/product/:bookId" element={<BookPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/categorias" element={<Teste />} />
            <Route path="/contato" element={<Teste />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
