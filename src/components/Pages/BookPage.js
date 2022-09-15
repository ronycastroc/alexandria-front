import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductWithID } from "../../service/alexandriaService.js";
import styled from "styled-components";

export default function BookPage() {
  const params = useParams();
  const [bookData, setbookData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductWithID(params.bookId)
      .then((res) => {
        setbookData(res.data);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Erro ao buscar o livro na API com este ID");
      });
  }, [params.bookId]);


  return <></>;
}
