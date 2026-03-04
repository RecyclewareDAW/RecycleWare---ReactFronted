    export default function TabAyuda() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Ayuda y Soporte</h2>
            <div className="alert alert-info d-flex align-items-center mb-4 border-0" style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}>
                <i className="bi bi-info-circle-fill fs-4 text-info me-3"></i>
                <div>¿Tienes un problema con una solicitud o equipo? Nuestro equipo está aquí para ayudarte.</div>
            </div>
            
            <h5 className="mb-3 fw-bold text-primary">Preguntas Frecuentes</h5>
            <div className="accordion mb-4" id="accordionFAQ">
                <div className="accordion-item border-0 mb-2 shadow-sm rounded">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                            ¿Cómo preparo mis equipos para la donación?
                        </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                        <div className="accordion-body text-muted">Asegúrate de borrar tus datos personales y empaquetarlos en cajas seguras para el transporte.</div>
                    </div>
                </div>
                <div className="accordion-item border-0 mb-2 shadow-sm rounded">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed rounded fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                            ¿Cuánto tarda en aprobarse una petición?
                        </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                        <div className="accordion-body text-muted">Normalmente revisamos las solicitudes en un plazo de 48 a 72 horas hábiles.</div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary mt-2"><i className="bi bi-envelope me-2"></i>Contactar con Soporte</button>
        </div>
    );
}