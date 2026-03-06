import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import UserConfig from "./pages/UserConfig";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import ListaProductos from './pages/ListaProductos';
import RankingEmpresas from './pages/RankingEmpresas';

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/perfil" element={<UserConfig />}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/productos' element={<ListaProductos/>}></Route>
                <Route path="/registro" element={<Registro />} />
                <Route path="/ranking" element={<RankingEmpresas />} />
              </Routes>
            </BrowserRouter>
    </>
  )
}