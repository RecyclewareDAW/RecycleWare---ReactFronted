//https://getbootstrap.com/docs/5.3/components/popovers/

import { Link } from "react-router-dom";

export const CardProducto = ({
  id,
  imagen,
  titulo,
  descripcion
  //enlace
}) => {
  return (
    <div className="col">
      <div className='card shadow-lg h-100'>
        <img className='card-img-top' src={imagen} alt={titulo} />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title fw-bold text-dark'>{titulo}</h5>
          <p className='card-text text-dark'>{descripcion}</p>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div className="p-2 rounded-2 bg-success">Buen estado</div>
            <Link to={`/solicitud/${id}`} className='btn btn-outline-success'>Solicitar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}