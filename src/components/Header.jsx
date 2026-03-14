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
    // Si la ruta es '/login', forzamos el estado activo a '#login' y evitamos el scroll spy
    if (location.pathname === '/login') {
      setActiveLink('#login');
    }

    // Si estamos en la página de solicitud, iluminamos "Productos"
    if (location.pathname.startsWith('/solicitud')) {
      setActiveLink('#categorias');
    }

    // Comprobar si hay un usuario logueado cada vez que cambia la ruta
    const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado)); // Convertimos el texto de memoria a un Objeto
    } else {
      setUsuario(null); // Si no hay nadie, limpiamos el estado
    }

    // Si no estamos en la ruta raíz ('/'), no intentamos calcular el scroll
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'info', 'contacto'];
      let currentSection = '';

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = `#${id}`;
          }
        }
      });

      if (currentSection !== '') {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Ejecutamos una vez al inicio para que detecte dónde estamos al cargar
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]); // Escuchamos cambios en la ruta

  return (
    <header className='sticky-top'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center ps-4" to="/#inicio" onClick={() => setActiveLink('#inicio')}>
            <img src={logo} alt="RecycleWare logo" className="logo" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#inicio' ? 'active' : ''}`}
                  to="/#inicio"
                  onClick={() => setActiveLink('#inicio')}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#categorias' ? 'active' : ''}`}
                  to="/#categorias"
                  onClick={() => setActiveLink('#categorias')}
                >
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-nowrap ${activeLink === '#info' ? 'active' : ''}`}
                  to="/#info"
                  onClick={() => setActiveLink('#info')}
                >
                  ¿Cómo funciona?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#contacto' ? 'active' : ''}`}
                  to="/#contacto"
                  onClick={() => setActiveLink('#contacto')}
                >
                  Contacto
                </Link>
              </li>

            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
              <form className="d-flex mb-3 mb-lg-0 me-lg-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                <button className="btn btn-primary px-3 d-flex align-items-center justify-content-center" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>

              {/* RENDERIZADO CONDICIONAL DEL USUARIO */}
              {usuario ? (
                // SI HAY USUARIO
                <div className="nav-item dropdown ms-lg-2">
                  <a
                    className="nav-link dropdown-toggle text-white d-flex align-items-center fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle fs-4 me-2 text-success"></i>
                    Hola, {usuario.nombre}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end mt-2 shadow border-0 rounded-3">
                    <li>
                      <Link className="dropdown-item py-2 text-dark" to="/perfil">
                        <i className="bi bi-gear-fill me-2 text-secondary"></i>Mi Perfil
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <ButtonLogout 
                        className="dropdown-item text-danger py-2 fw-bold"
                        onLogout={() => setUsuario(null)}>
                        <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
                      </ButtonLogout>
                    </li>
                  </ul>
                </div>
              ) : (
                // SI NO HAY USUARIO
                <Link
                  to="/login"
                  className={`iniciar-sesion text-nowrap text-decoration-none pb-2 pe-4 pb-lg-0 ${activeLink === '#login' ? 'active' : ''}`}
                  onClick={() => setActiveLink('#login')}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}