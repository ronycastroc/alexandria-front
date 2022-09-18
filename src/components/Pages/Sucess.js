import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import { IconContext } from "react-icons";
import { IoBagCheck } from "react-icons/io5";

export default function Sucess() {
    return (
        <>
            <Header />

                <SucessBox>                    
                    <h1>Sua compra foi realizada com sucesso!</h1>

                    <IconContext.Provider 
                        value={{
                            color: "#009929",
                            className: "global-class-name",
                            size: "100px",
                        }}>
          
                        <IoBagCheck/>
          
                    </IconContext.Provider>                                  
                </SucessBox>        

            <Footer />
        </>
    )
}

const SucessBox = styled.div`
    max-width: 700px;
    min-height: 80vh;
    background-color: #D6D5C9;
    border-radius: 5px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   

    h1 {
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 50px;
        font-weight: bold;
    }
`;

