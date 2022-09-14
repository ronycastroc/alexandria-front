import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/style/GlobalStyle'
import SignIn from './SignIn';

export default function App() {
    return (
        <BrowserRouter>
            
            <GlobalStyle />
                <Routes>
                    <Route path='/signin' element={<SignIn />}/>
                </Routes>

        </BrowserRouter>
    )
}
