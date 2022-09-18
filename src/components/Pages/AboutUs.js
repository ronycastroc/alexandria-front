import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import MobileHeader from "../MobileHeader";

export default function AboutUs() {
  return (
    <>
      <Wrapper>
        <Header />
        <MobileHeader />
        <Content>
          <Container>
            <div>
              <h1>Nossa História:</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div>
              <h1>Nossos Objetivos:</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </Container>
        </Content>
        <Footer />
      </Wrapper>
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
`;

const Content = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  flex: 1 1;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    color: #0a100d;
  }
  div {
    width: 700px;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 30px 0;
    h1 {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 15px;
      margin-top: 15px;
      text-align: center;
      color: #0a100d;
    }
  }
  p {
    line-height: 25px;
    text-align: center;
    color: #0a100d;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 15px;
      margin-top: 15px;
      text-align: center;
      color: #0a100d;
    }
    div {
      width: 350px;
      background-color: #ffffff;
      padding: 20px;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
      margin: 30px 0;
    }
    p {
      line-height: 25px;
      text-align: center;
      color: #0a100d;
    }
  }
`;

//git push origin responsiveHeader
