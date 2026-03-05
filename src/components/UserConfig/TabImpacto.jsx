export default function TabImpacto() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Mi Impacto y RSC</h2>
            <p className="text-muted mb-4">Gracias a tus donaciones, estamos construyendo un futuro más sostenible y reduciendo la brecha digital.</p>
            
            <div className="row g-3 mb-4">
                {/* Tarjeta 1 - Impacto realizado */}
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center impact-card-success">
                        <i className="bi bi-tree fs-1 mb-2"></i>
                        <h2 className="fw-bold mb-0">350 kg</h2>
                        <small className="text-muted fw-bold mt-1">CO₂ Ahorrado</small>
                    </div>
                </div>
                {/* Tarjeta 2 - Equipos donados */}
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center impact-card-info">
                        <i className="bi bi-laptop fs-1 text-info mb-2"></i>
                        <h2 className="fw-bold text-info mb-0">15</h2>
                        <small className="text-muted fw-bold mt-1">Equipos Donados</small>
                    </div>
                </div>
                {/* Tarjeta 3 - Centros ayudados */}
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center impact-card-warning">
                        <i className="bi bi-people fs-1 text-warning mb-2"></i>
                        <h2 className="fw-bold text-warning mb-0">3</h2>
                        <small className="text-muted fw-bold mt-1">Centros Ayudados</small>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm mt-4 p-4 rounded-4">
                <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3 insignia-icon">
                        <i className="bi bi-award fs-4"></i>
                    </div>
                    <div>
                        <h5 className="mb-1 fw-bold text-primary">Insignia: Empresa Sostenible 2026</h5>
                        <p className="mb-0 text-muted small">Has alcanzado el nivel oro de donantes de RecycleWare.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}