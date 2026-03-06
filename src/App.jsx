import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import UserConfig from "./pages/UserConfig";
import Registro from "./pages/Registro";
import Login from "./pages/Login";

import ListaProductos from './pages/ListaProductos';

import RecuperarContrasena from './pages/RecuperarContrasena';
import ContrasenaOlvidada from "./pages/ContrasenaOlvidada";

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/perfil" element={<UserConfig />}></Route>
                <Route path='/login' element={<Login/>}></Route>

                <Route path='/productos' element={<ListaProductos/>}></Route>
                <Route path="/registro" element={<Registro />}></Route>
                <Route path="/registro" element={<Registro />}></Route>
                
                <Route path="/recuperar-contrasena" element={<RecuperarContrasena />}></Route>
                <Route path="/olvide-contrasena" element={<ContrasenaOlvidada />}></Route>

              </Routes>
            </BrowserRouter>
    </>
  )
}