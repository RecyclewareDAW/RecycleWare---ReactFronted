const Card = ({imagen, titulo, descripcion, enlace}) => {
  return (
    <div className='card h-100 shadow'>
        <img className='card-img-top' src={imagen} alt={titulo} />
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title fw-bold text-secondary'>{titulo}</h5>
            <p className='card-text text-primary'>{descripcion}</p>
            <a href={enlace} className='mt-auto btn btn-outline-success'>Ver catálogo</a>
        </div>
    </div>
  )
}

export default Card;