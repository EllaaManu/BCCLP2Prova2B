import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tela404 from "./component/tela/Tela.404";
import TelaHome from "./component/tela/Tela.Home"
import TelaBatePapo from "./component/tela/Tela.Bate-Papo"
import TelaCadastroUsuario from "./component/tela/Tela.Cadastro-Usuario";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/BCCLP2Prova2B" element={<TelaHome />} />
                    <Route path="/BCCLP2Prova2B/usuario" element={<TelaCadastroUsuario />} />
                    <Route path="/BCCLP2Prova2B/chat" element={<TelaBatePapo />} />
                    <Route path="*" element={<Tela404 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
