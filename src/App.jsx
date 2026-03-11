import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import UserConfig from "./pages/UserConfig";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import SolicitudProducto from './pages/SolicitudProducto';
import ListaProductos from './pages/ListaProductos';
import DonateProduct from "./pages/DonateProduct";
import RecuperarContrasena from './pages/RecuperarContrasena';
import ContrasenaOlvidada from "./pages/ContrasenaOlvidada";
import PaginaTerminos from './pages/PaginaTerminos';
import RankingEmpresas from './pages/RankingEmpresas';
import CrudUsuarios from './pages/CrudUsuarios';
import CrudProductos from './pages/CrudProductos';

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                {/* RUTAS PÚBLICAS */}

                <Route path="/" element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path="/registro" element={<Registro />}></Route>
                <Route path='/productos' element={<ListaProductos/>}></Route>
                <Route path="/recuperar-contrasena" element={<RecuperarContrasena />}></Route>
                <Route path="/olvide-contrasena" element={<ContrasenaOlvidada />}></Route>
                <Route path="/terminos" element={<PaginaTerminos />} />
                <Route path="/ranking" element={<RankingEmpresas />} />

                {/* RUTAS QUE CONTROLAN SEGÚN SI ESTAN LOGUEADOS O NO */}

                <Route path='/donar' element={<DonateProduct />} />

                {/* RUTAS PRIVADAS */}

                <Route path="/perfil" element={<UserConfig />}></Route>
                <Route path="/solicitud/:id" element={<SolicitudProducto />}></Route>
                <Route path="/usuarios" element={<CrudUsuarios />} />
                <Route path="/inventario-productos" element={<CrudProductos />} />
              </Routes>
            </BrowserRouter>
    </>
  )
}