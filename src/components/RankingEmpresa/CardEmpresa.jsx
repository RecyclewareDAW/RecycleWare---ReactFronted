export default function CardEmpresa({ posicion, nombre, donaciones }) {
    return (
        <div className="m-2 bg-white rounded-4 border shadow-sm overflow-hidden">
            <div className="row align-items-center g-0">
                <div className="col-1 text-center bg-light py-3 border-end">
                    <div className="fs-4 fw-bold text-secondary">{posicion}º</div>
                </div>
                <div className="col-8 ps-4">
                    <div className="fs-5 fw-bold text-primary">{nombre || "Anónimo"}</div>
                </div>
                <div className="col-3 text-center text-primary pe-3 text-end">
                    <div className="small fw-medium">{donaciones} productos donados</div>
                </div>
            </div>
        </div>
    );
}