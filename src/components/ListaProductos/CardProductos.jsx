import { Link } from "react-router-dom";

export const CardProducto = ({ producto }) => {
  if (!producto) return null;
  const { id, imagenUrl, nombre, descripcion, estado } = producto;

  // Mapeo dinámico basado en los estados de la base de datos de estados_producto
  const obtenerEstilo = (idEstado) => {
    switch (idEstado) {
      case 1: // Excelente
        return { color: "text-success", icono: "bi-stars" };
      case 2: // Funcional
        return { color: "text-info", icono: "bi-check-circle-fill" };
      case 3: // Dañado
        return { color: "text-warning", icono: "bi-exclamation-triangle-fill" };
      case 4: // Para Piezas
        return { color: "text-danger", icono: "bi-tools" };
      default:
        return { color: "text-secondary", icono: "bi-question-circle" };
    }
  };

  const estilo = obtenerEstilo(estado?.id);

  return (
    <div className="col">
      <div className='card shadow-sm p-0 h-100'>
        <img 
          className='card-img-top' 
          src={imagenUrl} 
          alt={nombre}  
        />
        
        <div className='card-body flex-column'>
          <h5 className='card-title fw-bold text-primary'>{nombre}</h5>
          <p className='card-text text-dark small'>{descripcion}</p>
        </div>

        <div className="card-footer d-flex flex-row align-items-center justify-content-between bg-white border-top-0 pb-3">
          {/* Aplicamos el color y el icono según el ID del estado */}
          <span className={`${estilo.color} fw-bold small`}>
            <i className={`bi ${estilo.icono} me-1`}></i> 
            {estado?.nombre}
          </span>
          
          <Link to={`/solicitud/${id}`} className='btn btn-outline-success btn-sm'>
            Solicitar
          </Link>
        </div>
      </div>
    </div>
  );
};
