import styled from 'styled-components'
import GlobalStyle from '../assets/style/GlobalStyle'
import Home from './Pages/Home'

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
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