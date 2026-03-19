export const Podio = ({ nombre1, donaciones1, nombre2, donaciones2, nombre3, donaciones3 }) => {
    return (
        <div className="row align-items-end text-center mb-5 gy-4 gx-md-4 mt-5">
            
            {/* 2º PUESTO - Orden 2 en móvil, 1 en escritorio */}
            <div className="col-12 col-md-4 order-2 order-md-1">
                <div className="position-relative p-3 py-4 py-md-5 bg-white rounded-4 rounded-md-top-4 shadow border-top border-4 border-secondary h-100 podio-card puesto-2">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary fs-6 shadow">2º</span>
                    <i className="bi bi-award-fill fs-2 text-secondary mb-2 mt-2"></i>
                    <h5 className="text-primary fw-bold text-wrap mb-2 empresa-nombre">
                        {nombre2 || "..."}
                    </h5>
                    <p className="text-muted small mb-0">{donaciones2 || 0} don.</p>
                </div>
            </div>

            {/* 1º PUESTO - Siempre arriba o en el centro */}
            <div className="col-12 col-md-4 order-1 order-md-2 z-1">
                <div className="position-relative p-3 py-5 bg-white rounded-4 rounded-md-top-4 shadow border-top border-4 border-warning h-100 podio-card puesto-1">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning fs-5 shadow">1º</span>
                    <i className="bi bi-trophy-fill display-5 text-warning mb-2 mt-2"></i>
                    <h4 className="text-primary fw-bold text-wrap mb-2 empresa-nombre">
                        {nombre1 || "..."}
                    </h4>
                    <div className="badge bg-warning text-dark px-2 py-2 mt-2 small shadow-sm w-100 text-truncate">
                        {donaciones1 || 0} donaciones
                    </div>
                </div>
            </div>

            {/* 3º PUESTO - Orden 3 */}
            <div className="col-12 col-md-4 order-3">
                <div className="position-relative p-3 py-4 bg-white rounded-4 rounded-md-top-4 shadow border-top border-4 border-danger h-100 podio-card">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger fs-6 shadow">3º</span>
                    <i className="bi bi-award fs-3 text-danger mb-2 mt-2"></i>
                    <h5 className="text-primary fw-bold text-wrap mb-2 empresa-nombre">
                        {nombre3 || "..."}
                    </h5>
                    <p className="text-muted small mb-0">{donaciones3 || 0} don.</p>
                </div>
            </div>
        </div>
    );
}