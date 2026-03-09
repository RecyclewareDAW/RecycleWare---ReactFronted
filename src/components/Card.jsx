import { Link } from 'react-router-dom';

const Card = ({imagen, titulo, descripcion, enlace}) => {
  return (
    <div className='card h-100 shadow-sm'>
        <img className='card-img-top rounded-top-2' src={imagen} alt={titulo} />
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title fw-bold text-secondary'>{titulo}</h5>
            <hr></hr>
            <p className='card-text text-primary'>{descripcion}</p>
            <Link to={enlace} className='mt-auto btn btn-outline-success'>Ver catálogo</Link>
        </div>
    </div>
  )
}

export default Card;