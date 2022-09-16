import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      <Wrapper>
        <Header />
        <Container>
          <img
            src="https://st2.depositphotos.com/3591429/10464/i/600/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg"
            alt="aboutUs"
          />
          <h1>Nossa História:</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <h1>Nossos Objetivos:</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  margin-bottom: 200px;
`;

const Container = styled.div`
  img {
    width: 700px;
    height: 400px;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
  }
  div {
    width: 700px;
  }
  p {
    line-height: 25px;
    text-align: center;
  }
`;
