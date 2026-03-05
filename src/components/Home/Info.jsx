import React from "react";

export default function InfoSection() {
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
                <button className="btn btn-primary">
                  Registrarse ahora
                </button>
              </div>
            </div>
          </article>

          <article className="p-4 border rounded-4 bg-white shadow-sm">
            <h2 className="h3 mb-4 text-success">
              <i className="bi bi-heart me-2"></i>
              ¿Quieres colaborar?
            </h2>
            <p className="mb-4 text-dark">
              Tu hardware puede cambiar una vida. Puedes colaborar de distintas formas:
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="h5 fw-bold text-primary">
                  <i className="bi bi-person me-2"></i>
                  Particulares
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0 border-0 bg-transparent text-dark">
                    <strong>Donación Identificada:</strong> Regístrate para llevar un historial
                    de tus donaciones y solicitudes, y elegir el punto de entrega o recogida.
                  </li>
                  <li className="list-group-item px-0 border-0 bg-transparent text-dark">
                    <strong>Donación Puntual:</strong> Colabora sin registro entregando
                    tus equipos directamente en nuestros puntos autorizados.
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h5 fw-bold text-primary">
                  <i className="bi bi-building me-2"></i>
                  Empresas
                </h3>
                <p className="small text-dark">
                  Las empresas pueden registrarse con un perfil corporativo.
                  Al hacerlo, <strong>se reconocerán oficialmente sus méritos</strong> y
                  aportaciones a la economía circular, otorgando visibilidad a su
                  compromiso social en nuestra plataforma.
                </p>
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}