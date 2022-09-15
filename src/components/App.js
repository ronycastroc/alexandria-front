import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../assets/style/GlobalStyle'
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function App() {
    return (
        <BrowserRouter>
            
            <GlobalStyle />
                <Routes>
                    <Route path='/signin' element={<SignIn />}/>
                    <Route path='/signup' element={<SignUp />}/>
                </Routes>

        </BrowserRouter>
    )
}
