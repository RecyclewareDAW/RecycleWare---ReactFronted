export default function TabImpacto() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo mb-4 border-bottom pb-2">Mi Impacto y RSC</h2>
            <p className="text-muted mb-4">Gracias a tus donaciones, estamos construyendo un futuro más sostenible y reduciendo la brecha digital.</p>
            
            <div className="row g-3 mb-4">
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'rgba(78, 190, 149, 0.1)' }}>
                        <i className="bi bi-tree fs-1 mb-2" style={{ color: '#4EBE95' }}></i>
                        <h2 className="fw-bold mb-0" style={{ color: '#4EBE95' }}>350 kg</h2>
                        <small className="text-muted fw-bold mt-1">CO₂ Ahorrado</small>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'rgba(33, 158, 188, 0.1)' }}>
                        <i className="bi bi-laptop fs-1 text-info mb-2"></i>
                        <h2 className="fw-bold text-info mb-0">15</h2>
                        <small className="text-muted fw-bold mt-1">Equipos Donados</small>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 text-center h-100 d-flex flex-column justify-content-center" style={{ backgroundColor: 'rgba(255, 183, 3, 0.1)' }}>
                        <i className="bi bi-people fs-1 text-warning mb-2"></i>
                        <h2 className="fw-bold text-warning mb-0">3</h2>
                        <small className="text-muted fw-bold mt-1">Centros Ayudados</small>
                    </div>
                </div>
            </div>

            <div className="card border-0 shadow-sm mt-4 p-4 rounded-4">
                <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
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