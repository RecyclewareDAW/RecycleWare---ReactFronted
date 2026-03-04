export default function TabPerfil({ userRole, setActiveTab }) {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo mb-4 border-bottom pb-2">Datos Personales</h2>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control inputs" placeholder="Tu nombre" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control inputs" placeholder="Tus apellidos" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control inputs" placeholder="tucorreo@ejemplo.com" />
                </div>
                <button type="button" className="btn btn-secondary mb-4">Guardar Cambios</button>
            </form>

            {/* SECCIÓN: RESUMEN DE DONACIONES (SOLO EMPRESAS) */}
            {userRole === 'empresa' && (
                <div className="mt-5 pt-2 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                        <h3 className="mb-0 fw-bold text-primary" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '1.4rem' }}>
                            Últimas Donaciones
                        </h3>
                        <button 
                            type="button"
                            className="btn btn-sm btn-link text-secondary text-decoration-none fw-bold p-0"
                            onClick={() => setActiveTab('donaciones')}
                        >
                            Ver todas <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                    
                    <div className="d-flex flex-column gap-3">
                        <div className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(236, 248, 248, 0.5)' }}>
                            <div>
                                <h6 className="mb-1 fw-bold text-dark">Lote de 10 Monitores Dell 24"</h6>
                                <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>28 Feb 2026</small>
                            </div>
                            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill">
                                Completado
                            </span>
                        </div>
                        <div className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(236, 248, 248, 0.5)' }}>
                            <div>
                                <h6 className="mb-1 fw-bold text-dark">5 Portátiles HP ProBook</h6>
                                <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>15 Feb 2026</small>
                            </div>
                            <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-2 py-1 rounded-pill">
                                En Taller
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}