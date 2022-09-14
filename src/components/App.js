import styled from "styled-components";
import GlobalStyle from "../assets/style/GlobalStyle";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<></>} />
          <Route path="/login" element={<Home />} />
          <Route path="/contato" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}
