import styled from "styled-components";
import Header from "../Header";

export default function Home() {
  return (
    <Wrapper>
      <Header></Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
