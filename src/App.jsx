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
  // 1. DECLARAMOS EL ESTADO DEL USUARIO (Esto es lo que faltaba)
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
          // Si el servidor falla (401/403), limpiamos todo
          console.warn("Sesión expirada o servidor reiniciado");
          localStorage.removeItem('usuarioRecycleware');
          setUsuario(null);
        }
      }
      setCargando(false);
    };

    inicializarSesion();
  }, []);

  // Mientras comprueba la sesión, mostramos un blanco o un spinner para evitar saltos
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

          {/* RUTAS PROTEGIDAS CON LÓGICA (Solo entran si 'usuario' existe) */}
          <Route path='/donar' element={<DonateProduct />} />
          
          {/* Aquí usamos UserConfig porque parece que ahí es donde tienes tu Tabs de perfil */}
          <Route path="/perfil" element={usuario ? <UserConfig /> : <Navigate to="/login" />} />
          <Route path="/perfil/:tab" element={usuario ? <UserConfig /> : <Navigate to="/login" />} />
          
          <Route path="/solicitud/:id" element={usuario ? <SolicitudProducto /> : <Navigate to="/login" />} />
          
          {/* RUTAS DE ADMIN (Acceso restringido) */}
          <Route path="/usuarios" 
                 element={usuario && usuario.rol?.toUpperCase() === 'ADMIN' ? <CrudUsuarios /> : (usuario ? <div className="p-5 text-center"><h1 className="text-danger">ACCESO DENEGADO</h1><p>Tu rol es: <b>{usuario.rol}</b> (Se requiere ADMIN)</p></div> : <Navigate to="/login" />)} 
          />
          
          <Route path="/inventario-productos" 
                 element={usuario && usuario.rol?.toUpperCase() === 'ADMIN' ? <CrudProductos /> : (usuario ? <div className="p-5 text-center"><h1 className="text-danger">ACCESO DENEGADO</h1><p>Tu rol es: <b>{usuario.rol}</b> (Se requiere ADMIN)</p></div> : <Navigate to="/login" />)} 
          />

          {/* Redirección por si escriben cualquier otra cosa */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// import React, { useEffect } from 'react';

// import { api } from './services/api';

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from "./pages/Home";
// import UserConfig from "./pages/UserConfig";
// import Registro from "./pages/Registro";
// import Login from "./pages/Login";
// import SolicitudProducto from './pages/SolicitudProducto';
// import ListaProductos from './pages/ListaProductos';
// import DonateProduct from "./pages/DonateProduct";
// import RecuperarContrasena from './pages/RecuperarContrasena';
// import ContrasenaOlvidada from "./pages/ContrasenaOlvidada";
// import PaginaTerminos from './pages/PaginaTerminos';
// import RankingEmpresas from './pages/RankingEmpresas';
// import CrudUsuarios from './pages/CrudUsuarios';
// import CrudProductos from './pages/CrudProductos';

// export default function App() {

//   useEffect(() => {
//     // Al cargar la web, preguntamos al servidor: ¿quién soy?
//     const checkSession = async () => {
//       try {
//         const user = await api.get('/auth/user');
//         console.log("RESPUESTA DEL SERVIDOR:", user); // Mira qué sale aquí
//       } catch (err) {
//         console.error("ERROR AL VALIDAR:", err.message);
//         // Si entra aquí, es que el servidor ha devuelto 401 o 403
//       }
//     };
//     checkSession();
//   }, []);

//   // En App.jsx o Navbar.jsx
//   useEffect(() => {
//     const verificarSesion = async () => {
//       try {
//         // Intentamos pedir los datos del usuario actual al servidor
//         await api.get('/auth/check');
//       } catch (error) {
//         // Si el servidor da 401 o 403, limpiamos el LocalStorage porque la sesión expiró
//         console.warn("Sesión expirada en el servidor");
//         localStorage.removeItem('usuarioRecycleware');
//         // Opcional: window.location.reload(); para limpiar la UI
//       }
//     };

//     if (localStorage.getItem('usuarioRecycleware')) {
//       verificarSesion();
//     }
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* RUTAS PÚBLICAS */}

//           <Route path="/" element={<Home />}></Route>
//           <Route path='/login' element={<Login />}></Route>
//           <Route path="/registro" element={<Registro />}></Route>
//           <Route path='/productos' element={<ListaProductos />}></Route>
//           <Route path='/productos/:nombreProducto' element={<ListaProductos />}></Route>
//           <Route path="/recuperar-contrasena" element={<RecuperarContrasena />}></Route>
//           <Route path="/olvide-contrasena" element={<ContrasenaOlvidada />}></Route>
//           <Route path="/terminos" element={<PaginaTerminos />} />
//           <Route path="/ranking" element={<RankingEmpresas />} />
//           <Route path="/solicitar/:id" element={<SolicitudProducto />} />

//           {/* RUTAS QUE CONTROLAN SEGÚN SI ESTAN LOGUEADOS O NO */}

//           <Route path='/donar' element={<DonateProduct />} />

//           {/* RUTAS PRIVADAS */}

//           <Route path="/perfil" element={usuario ? <Perfil /> : <Navigate to="/login" />} />
//           {/* <Route path="/perfil" element={<Navigate to="/perfil/perfil" replace />} /> */}
//           <Route path="/perfil/:tab" element={<UserConfig />} />
//           <Route path="/solicitud/:id" element={<SolicitudProducto />}></Route>
//           <Route path="/usuarios" element={<CrudUsuarios />} />
//           <Route path="/inventario-productos" element={<CrudProductos />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }