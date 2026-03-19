import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function InfoSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
    if (usuarioGuardado && usuarioGuardado !== "undefined") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container py-5">
      <section className="row justify-content-center" id="info">
        <div className="col">

          <article className="mb-5 p-4 bg-white border rounded-4 shadow-sm text-dark">
            <h2 className="h3 mb-3 text-primary">
              <i className="bi bi-info-circle me-2"></i>
              ¿Qué es RecycleWare?
            </h2>
            <p className="lead">
              Somos una plataforma intermediaria que da larga vida a la tecnología.
            </p>
            <p>
              Actuamos como un puente entre quienes tienen hardware sobrante y quienes lo necesitan
              para seguir creciendo profesional o personalmente.
            </p>
            <div className="p-3 border-start border-4 border-primary bg-light">
              <p className="mb-0">
                <strong>El ciclo es sencillo:</strong> Recibimos los equipos donados en
                nuestros puntos autorizados, los ponemos a punto y los publicamos en nuestro catálogo
                para que vuelvan a ser útiles y puedan ser solicitados por quienes los necesiten.
              </p>
            </div>
          </article>

          <article className="mb-5">
            <h2 className="h3 mb-3 text-primary">
              <i className="bi bi-laptop me-2"></i>
              ¿Necesitas equipamiento?
            </h2>

            <div className="row align-items-center text-dark">
              <div className="col-md-8">
                <p>
                  Cualquier persona puede visualizar nuestro catálogo disponible, pero para solicitar
                  un producto es necesario <strong>estar registrado</strong>.
                  Esto nos permite garantizar una entrega justa y organizada.
                </p>
                <p>
                  Una vez aprobada tu solicitud, deberás acudir a uno de nuestros puntos autorizados
                  para retirar el equipo solicitado.
                </p>
              </div>
              <div className="col-md-4 text-center">
                {isLoggedIn ? (
                  <Link to="/productos" className="btn btn-primary">
                    Ver catálogo
                  </Link>
                ) : (
                  <Link to="/registro" className="btn btn-primary">
                    Registrarse ahora
                  </Link>
                )}
              </div>
            </div>
          </article>

          <article className="p-4 border rounded-4 bg-white shadow-sm">
            <h2 className="h3 mb-4 text-success">
              <i className="bi bi-heart me-2"></i>
              ¿Quieres colaborar?
            </h2>
            <p className="mb-4 text-dark">
              Tu hardware puede cambiar una vida. El proceso de donación depende de tu tipo de perfil:
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="h5 fw-bold text-primary">
                  <i className="bi bi-person me-2"></i>
                  Particulares
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 border-0 bg-transparent text-dark">
                    Tanto si estás registrado como si donas de forma anónima, debes
                    <strong> entregar tus equipos directamente</strong> en nuestro centro IES Doctor Balmis.
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h5 fw-bold text-primary">
                  <i className="bi bi-building me-2"></i>
                  Empresas
                </h3>
                <p className="text-dark">
                <strong>Recogida a domicilio:</strong> El registro es clave para medir vuestro impacto social. No hace falta que os desplacéis para entregar los productos, con sólo solicitar la recogida desde vuestro perfil nosotros nos encargamos de la recogida en vuestras oficinas.
            </p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}