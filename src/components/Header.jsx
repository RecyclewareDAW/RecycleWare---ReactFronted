import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import ButtonLogout from './Session/ButtonLogout';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#inicio');
  const location = useLocation(); // Para saber en qué ruta estamos
  const navigate = useNavigate(); // Para redirigir

  // Estado para guardar los datos del usuario logueado
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // 1. Lógica de Rutas
    if (location.pathname === '/login') {
      setActiveLink('#login');
    } else if (location.pathname === '/ranking') {
      setActiveLink('/ranking');
    } else if (location.pathname === '/productos') { // <--- Nueva condición
      setActiveLink('/productos');
    } else if (location.pathname.startsWith('/solicitud')) {
      setActiveLink('#categorias');
    } else if (location.pathname === '/') {
      setActiveLink(location.hash || '#inicio');
    }

    // 2. Cargar usuario
    const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
    setUsuario(usuarioGuardado ? JSON.parse(usuarioGuardado) : null);

    // 3. Lógica de Scroll (SOLO si estamos en la raíz '/')
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'info', 'contacto'];
      let currentSection = '';

      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        currentSection = '#contacto';
      } else {
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              currentSection = `#${id}`;
            }
          }
        });
      }

      if (currentSection !== '' && currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecución inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, location.hash]); // Quitamos activeLink de las dependencias para evitar bucles
  return (
    <header className='sticky-top'>
      <nav className="navbar navbar-expand-xl bg-dark">
        <div className="container-fluid d-block"> {/* Permite el despliegue vertical en móvil */}

          {/* FILA PRINCIPAL */}
          <div className="row align-items-center m-0 g-0 w-100 position-relative">

            {/* Logo */}
            <div className="col-6 col-xl-3 d-flex justify-content-start">
              <Link className="navbar-brand m-0" to="/#inicio" onClick={() => setActiveLink('#inicio')}>
                <img src={logo} alt="RecycleWare logo" className="logo" />
              </Link>
            </div>

            {/* Espacio para el Nav en Escritorio (Invisible pero reserva el hueco central) */}
            <div className="col-xl-8 d-none d-xl-block"></div>

            {/* Derecha: Perfil en PC / Hamburguesa en móvil */}
            <div className="col-6 col-xl-1 d-flex justify-content-end align-items-center">
              <div className="d-none d-xl-block">
                {usuario ? (
                  <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white d-flex align-items-center fw-bold"
                      href="#" role="button" data-bs-toggle="dropdown">
                      <i className="bi bi-person-circle fs-4 me-2 text-success"></i>
                      {usuario.nombre}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end mt-2 shadow border-0">
                      <li><Link className="dropdown-item" to="/perfil"><i className="bi bi-gear-fill me-2 text-secondary"></i>Mi Perfil</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><ButtonLogout className="dropdown-item text-danger fw-bold" onLogout={() => setUsuario(null)}><i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión</ButtonLogout></li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login"
                    className={`iniciar-sesion text-decoration-none text-nowrap ${activeLink === '#login' ? 'active' : ''}`}
                    onClick={() => setActiveLink('#login')}>
                    Iniciar Sesión
                  </Link>
                )}
              </div>

              <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent">
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>

          {/* MENÚ DESPLEGABLE */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-xl-0 align-items-center text-center">
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '#inicio' ? 'active' : ''}`} to="/#inicio" onClick={() => setActiveLink('#inicio')}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-nowrap ${activeLink === '#info' ? 'active' : ''}`} to="/#info" onClick={() => setActiveLink('#info')}>¿Cómo funciona?</Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#categorias' || activeLink === '/productos' ? 'active' : ''}`}
                  to="/productos"
                  onClick={() => setActiveLink('/productos')}
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '#contacto' ? 'active' : ''}`} to="/#contacto" onClick={() => setActiveLink('#contacto')}>Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${activeLink === '/ranking' ? 'active' : ''}`} to="/ranking" onClick={() => setActiveLink('/ranking')}>Colaboradores</Link>
              </li>

              {/* Solo visible en hamburguesa móvil */}
              <li className="nav-item d-xl-none border-top mt-2 pt-2 w-100">
                {usuario ? (
                  <>
                    <div className="text-success fw-bold py-2">Hola, {usuario.nombre}</div>
                    <Link className="nav-link" to="/perfil">Mi Perfil</Link>
                    <ButtonLogout className="nav-link text-danger w-100 bg-transparent border-0" onLogout={() => setUsuario(null)}>
                      Cerrar Sesión
                    </ButtonLogout>
                  </>
                ) : (
                  <Link className="nav-link" to="/login" onClick={() => setActiveLink('#login')}>Iniciar Sesión</Link>
                )}
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}