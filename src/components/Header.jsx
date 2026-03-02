//Header con nav
import logo from '../assets/img/logo.png';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#inicio">
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
                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categorias">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-nowrap" href="#info">¿Cómo funciona?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center">
              <form className="d-flex mb-3 mb-lg-0 me-lg-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
                <button className="btn btn-primary d-flex align-items-center justify-content-center" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              <a href="#" className="iniciar-sesion text-nowrap text-decoration-none pb-2 pb-lg-0">Iniciar Sesión</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}