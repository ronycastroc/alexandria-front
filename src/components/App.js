import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./Pages/teste";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import BookPage from "./Pages/BookPage";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import UserContext from "../context/UserContext.js";
import { useState } from "react";

export default function App() {
  const [cartItens, setCartItens] = useState([]);
  const [subTotal, setSubTotal] = useState([]);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ cartItens, setCartItens, subTotal, setSubTotal }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sobrenos" element={<Teste />} />
            <Route path="/product/:bookId" element={<BookPage />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/categorias" element={<Teste />} />
            <Route path="/contato" element={<Teste />} />
            <Route path="/checkout" element={<CheckOut />}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
