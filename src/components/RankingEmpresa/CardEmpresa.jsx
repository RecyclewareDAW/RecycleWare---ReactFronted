export default function CardEmpresa({ posicion, nombre, donaciones }) {
    return (
        <div className="m-2 bg-white rounded-4 border shadow-sm overflow-hidden">
            <div className="row align-items-center g-0">
                <div className="col-2 col-md-1 text-center bg-light py-3 border-end">
                    <div className="fs-4 fw-bold text-secondary">{posicion}º</div>
                </div>
                <div className="col-6 col-md-8 ps-3 ps-md-4">
                    <div className="fs-6 fs-md-5 fw-bold text-primary text-truncate">{nombre || "Anónimo"}</div>
                </div>
                <div className="col-4 col-md-3 text-center text-primary pe-2 pe-md-3">
                    <div className="small fw-medium">{donaciones} <span className="d-none d-sm-inline">productos</span> donados</div>
                </div>
            </div>
        </div>
    );
}