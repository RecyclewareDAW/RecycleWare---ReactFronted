export default function ResumenProducto({ producto }) {
    return (
        <div className="col-lg-5">
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={producto.imagen} 
                    className="card-img-top object-fit-cover img-solicitud" 
                    alt={producto.titulo} 
                />
                <div className="card-body bg-light">
                    <h5 className="card-title fw-bold text-secondary">{producto.titulo}</h5>
                    <p className="card-text text-primary small mb-3">{producto.descripcion}</p>
                    <span className="badge bg-success">{producto.estado}</span>
                </div>
            </div>
        </div>
    );
}