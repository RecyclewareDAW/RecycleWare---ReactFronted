import React, { useEffect, useState } from 'react'; // He añadido useState aquí

import { api } from './services/api';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const inicializarSesion = async () => {
      const dataLocal = localStorage.getItem('usuarioRecycleware');
      
      if (dataLocal) {
        try {
          const response = await api.get('/auth/user');
          setUsuario(response);
          localStorage.setItem('usuarioRecycleware', JSON.stringify(response)); 
        } catch (error) {
          
          console.warn("Sesión expirada o servidor reiniciado");
          localStorage.removeItem('usuarioRecycleware');
          setUsuario(null);
        }
      }
      setCargando(false);
    };

    inicializarSesion();
  }, []);

  if (cargando) return null;

  return (
    <>
      <BrowserRouter>
       <Routes>
          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path='/productos' element={<ListaProductos />} />
          <Route path='/productos/:nombreProducto' element={<ListaProductos />} />
          <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
          <Route path="/olvide-contrasena" element={<ContrasenaOlvidada />} />
          <Route path="/terminos" element={<PaginaTerminos />} />
          <Route path="/ranking" element={<RankingEmpresas />} />
          <Route path="/solicitar/:id" element={<SolicitudProducto />} />

          <Route path='/donar' element={<DonateProduct />} />
          
          <Route path="/perfil" element={usuario ? <UserConfig /> : <Navigate to="/login" />} />
          <Route path="/perfil/:tab" element={usuario ? <UserConfig /> : <Navigate to="/login" />} />
          
          <Route path="/solicitud/:id" element={usuario ? <SolicitudProducto /> : <Navigate to="/login" />} />
          
          <Route path="/usuarios" 
                 element={usuario && usuario.rol?.toUpperCase() === 'ADMIN' ? <CrudUsuarios /> : (usuario ? <div className="p-5 text-center"><h1 className="text-danger">ACCESO DENEGADO</h1><p>Tu rol es: <b>{usuario.rol}</b> (Se requiere ADMIN)</p></div> : <Navigate to="/login" />)} 
          />
          
          <Route path="/inventario-productos" 
                 element={usuario && usuario.rol?.toUpperCase() === 'ADMIN' ? <CrudProductos /> : (usuario ? <div className="p-5 text-center"><h1 className="text-danger">ACCESO DENEGADO</h1><p>Tu rol es: <b>{usuario.rol}</b> (Se requiere ADMIN)</p></div> : <Navigate to="/login" />)} 
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}