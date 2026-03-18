import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import ButtonLogout from './Session/ButtonLogout';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#inicio');
  const location = useLocation();

  const [usuario, setUsuario] = useState(null);

  const cerrarNavbar = () => {
  const navbar = document.getElementById('navbarSupportedContent');
  if (navbar) {
    const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  }
};

  //  SINCRONIZAR RUTA + HASH
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink(location.hash || '#inicio');
    } else {
      if (location.pathname === '/login') {
        setActiveLink('#login');
      } else if (location.pathname === '/ranking') {
        setActiveLink('/ranking');
      } else if (location.pathname === '/productos') {
        setActiveLink('/productos');
      } else if (location.pathname.startsWith('/solicitud')) {
        setActiveLink('#categorias');
      }
    }
  }, [location.pathname, location.hash]);

  // CARGAR USUARIO
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
    setUsuario(usuarioGuardado ? JSON.parse(usuarioGuardado) : null);
  }, [location.pathname]);

  // SCROLL INTELIGENTE
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['inicio', 'categorias', 'info', 'contacto'];
      let currentSection = '';

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

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

      if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);

        window.history.replaceState(null, '', currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeLink]);

  //  MEDIR ALTURA NAVBAR
  useEffect(() => {
    const medirNavbar = () => {
      const header = document.querySelector('header');
      if (header) {
        document.documentElement.style.setProperty(
          '--nav-height',
          `${header.offsetHeight}px`
        );
      }
    };

    medirNavbar();
    window.addEventListener('resize', medirNavbar);

    return () => window.removeEventListener('resize', medirNavbar);
  }, []);

  return (
    <header className='sticky-top'>
      <nav className="navbar navbar-expand-xl bg-dark">
        <div className="container-fluid d-block">

          <div className="row align-items-center m-0 g-0 w-100 position-relative">

            {/* LOGO */}
            <div className="col-6 col-xl-3 d-flex justify-content-start">
              <Link
                className="navbar-brand m-0"
                to="/#inicio"
                onClick={() => setActiveLink('#inicio')}
              >
                <img src={logo} alt="RecycleWare logo" className="logo" />
              </Link>
            </div>

            <div className="col-xl-8 d-none d-xl-block"></div>

            {/* PERFIL / LOGIN */}
            <div className="col-6 col-xl-1 d-flex justify-content-end align-items-center">
              <div className="d-none d-xl-block">
                {usuario ? (
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white d-flex align-items-center fw-bold"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-person-circle fs-4 me-2 text-success"></i>
                      {usuario.nombre}
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end mt-2 shadow border-0">
                      <li>
                        <Link className="dropdown-item" to="/perfil">
                          Mi Perfil
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <ButtonLogout
                          className="dropdown-item text-danger fw-bold"
                          onLogout={() => setUsuario(null)}
                        >
                          Cerrar Sesión
                        </ButtonLogout>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className={`iniciar-sesion text-nowrap ${activeLink === '#login' ? 'active' : ''}`}
                  >
                    Iniciar Sesión
                  </Link>
                )}
              </div>

              <button
                className="navbar-toggler ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          </div>

          {/* MENÚ */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center">

              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#inicio' ? 'active' : ''}`}
                  to="/#inicio"
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-nowrap ${activeLink === '#info' ? 'active' : ''}`}
                  to="/#info"
                >
                  ¿Cómo funciona?
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '/productos' || activeLink === '#categorias' ? 'active' : ''
                    }`}
                  to="/productos"
                >
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '#contacto' ? 'active' : ''}`}
                  to="/#contacto"
                >
                  Contacto
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${activeLink === '/ranking' ? 'active' : ''}`}
                  to="/ranking"
                >
                  Colaboradores
                </Link>
              </li>

              {/* SOLO MÓVIL */}
              <li className="nav-item d-xl-none border-top mt-2 pt-2 w-100">
                {usuario ? (
                  <>
                    <div className="text-success fw-bold py-2">
                      Hola, {usuario.nombre}
                    </div>

                    <Link className="nav-link" to="/perfil">
                      Mi Perfil
                    </Link>

                    <ButtonLogout
                      className="nav-link text-danger w-100 bg-transparent border-0"
                      onLogout={() => setUsuario(null)}
                    >
                      Cerrar Sesión
                    </ButtonLogout>
                  </>
                ) : (
                  <Link
                    className={`nav-link ${activeLink === '#login' ? 'active' : ''}`}
                    to="/login"
                  >
                    Iniciar Sesión
                  </Link>
                )}
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}