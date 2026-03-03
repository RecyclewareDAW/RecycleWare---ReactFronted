import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#inicio');
 useEffect(() => {
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='fixed-top'>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/#inicio" onClick={() => setActiveLink('#inicio')}>
            <img src={logo} alt="RecycleWare logo" className="logo" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === '#inicio' ? 'active' : ''}`} 
                  href="/#inicio"
                  onClick={() => setActiveLink('#inicio')}
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === '#categorias' ? 'active' : ''}`} 
                  href="/#categorias"
                  onClick={() => setActiveLink('#categorias')}
                >
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link text-nowrap ${activeLink === '#info' ? 'active' : ''}`} 
                  href="/#info"
                  onClick={() => setActiveLink('#info')}
                >
                  ¿Cómo funciona?
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === '#contacto' ? 'active' : ''}`} 
                  href="/#contacto"
                  onClick={() => setActiveLink('#contacto')}
                >
                  Contacto
                </a>
              </li>

            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
              <form className="d-flex mb-3 mb-lg-0 me-lg-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                <button className="btn btn-primary d-flex align-items-center justify-content-center" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <Link to="/login" className="iniciar-sesion text-nowrap text-decoration-none pb-2 pb-lg-0">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}