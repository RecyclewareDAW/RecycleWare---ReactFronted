import { Link } from "react-router-dom";

export default function TabAyuda({ userRole }) {
  // PLAN B: Si la prop userRole falla, la leemos directamente de la sesión
  const session = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');
  const rolReal = userRole || (session.rol === 'PARTICULAR' ? 'individual' : 'empresa');

  const esEmpresa = rolReal === 'empresa';

  return (
    <div className="animate-fade-in">
      <h2 className="titulo">Ayuda y Soporte</h2>

      <div className="alert alert-info d-flex align-items-center mb-4 border-0 bg-info bg-opacity-10">
        <i className="bi bi-info-circle-fill fs-4 text-info me-3"></i>
        <div>
          {esEmpresa
            ? "Panel de soporte corporativo. Gestión de logística, donaciones y recogidas"
            : "¿Tienes un problema con una solicitud o equipo? Nuestro equipo está aquí para ayudarte."
          }
        </div>
      </div>

      <h5 className="mb-3 fw-bold text-primary">
        Preguntas Frecuentes
      </h5>

      <div className="accordion mb-4" id="accordionFAQ">
        {esEmpresa ? (
          /* --- SOLO PARA EMPRESAS --- */
          <>
            <div className="accordion-item border-0 mb-2 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faqEmp1">
                  ¿Cómo preparo los lotes para la recogida?
                </button>
              </h2>
              <div id="faqEmp1" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted">
                  Puede empacar los equipos con cuidado para su recogida, o informar en su solicitud para que nos encarguemos de ello nosotros.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-2 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faqEmp2">
                  ¿Qué ocurre si los equipos donados no funcionan o están obsoletos?
                </button>
              </h2>
              <div id="faqEmp2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted">
                  No hay ningún problema. En <strong>RecycleWare</strong> aprovechamos todo: si un equipo no puede repararse por completo, recuperamos sus componentes para <strong>ofrecerlos como piezas de repuesto</strong>. De esta forma, ayudamos a otros usuarios a reparar sus dispositivos y alargamos al máximo la vida útil de la tecnología.
                </div>
              </div>
            </div>
          </>
        ) : (
          /* --- SOLO PARA PARTICULARES --- */
          <>
            <div className="accordion-item border-0 mb-2 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faqPart1">
                  ¿Cuánto tarda en resolverse mi solicitud?
                </button>
              </h2>
              <div id="faqPart1" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted">
                  Normalmente revisamos las solicitudes en un plazo de 48 a 72 horas hábiles.
                </div>
              </div>
            </div>
            <div className="accordion-item border-0 mb-2 shadow-sm rounded">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faqPart2">
                  ¿Cómo recibo mi equipo?
                </button>
              </h2>
              <div id="faqPart2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                <div className="accordion-body text-muted">
                  Una vez aprobada tu solicitud, solo tendrás que acudir a nuestro centro IES Doctor Balmis a recoger el equipo con tu DNI.
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Link to="/#contacto" className="btn btn-outline-primary mt-2">
          <i className="bi bi-envelope me-2"></i>Contactar con Soporte
        </Link>
      </div>
    </div>
  );
}