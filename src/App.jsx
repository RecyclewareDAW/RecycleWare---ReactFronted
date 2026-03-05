import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/TestSegundaPagina";
import UserConfig from "./pages/UserConfig";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import SolicitudProducto from "./pages/SolicitudProducto";

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/estrella" element={<Test/>}></Route>
                <Route path="/perfil" element={<UserConfig />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path="/registro" element={<Registro />}></Route>
                <Route path="/solicitud/:id" element={<SolicitudProducto />}></Route>
              </Routes>
            </BrowserRouter>
    </>
  )
}