import styled from 'styled-components'
import GlobalStyle from '../assets/style/GlobalStyle'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Title>Hello World!!!</Title>
        </>
    )
}

const Title = styled.h1`
    font-size: 100px;
    transition: linear 1s;
    cursor: pointer;

    :active {
        font-size: 200px;
        color: green;      
    }   

`