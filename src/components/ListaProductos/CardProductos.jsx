//https://getbootstrap.com/docs/5.3/components/popovers/

import { Link } from "react-router-dom";

export const CardProducto = ({
  id,
  imagen,
  titulo,
  descripcion,
  //enlace
}) => {
  return (
    <div className="col">
      <div className='card shadow-sm p-0 h-100'>
        <img className='card-img-top' src={imagen} alt={titulo} />
        <div className='card-body flex-column'>
          <h5 className='card-title fw-bold text-primary'>{titulo}</h5>
          <p className='card-text text-dark'>{descripcion}</p>
          
        </div>
        <div className="card-footer d-flex flex-row align-items-center justify-content-between">
            <span className="text-success fw-bold small">
              <i className="bi bi-check-circle-fill me-1"></i> Buen estado
            </span>
            <Link to={`/solicitud/${id}`} className='btn btn-outline-success'>Solicitar</Link>
          </div>
      </div>
    </div>
  );
};
