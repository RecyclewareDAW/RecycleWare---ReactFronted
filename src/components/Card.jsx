// const Card = ({imagen, titulo, descripcion, enlace}) => {
//   return (
//     <div className='card h-100 shadow'>
//         <img className='card-img-top' src={imagen} alt={titulo} />
//         <div className='card-body d-flex flex-column'>
//             <h5 className='card-title fw-bold text-secondary'>{titulo}</h5>
//             <p className='card-text text-primary'>{descripcion}</p>
//             <a href={enlace} className='mt-auto btn btn-outline-success'>Ver catálogo</a>
//         </div>
//     </div>
//   )
// }

// export default Card;

// Le añado"estado" y hago que el botón solo salga si hay "enlace"
const Card = ({imagen, titulo, descripcion, enlace, estado}) => {
  return (
    <div className='card h-100 shadow'>
        {/* Usamos object-fit-cover para que las imágenes queden todas iguales */}
        <img className='card-img-top object-fit-cover img-tarjeta' src={imagen} alt={titulo} />
        
        <div className='card-body d-flex flex-column'>
            <h5 className='card-title fw-bold text-secondary'>{titulo}</h5>
            <p className='card-text text-primary'>{descripcion}</p>
            
            {/* Si le pasamos un estado, muestra el badge */}
            {estado && <span className="badge bg-success align-self-start mb-3">{estado}</span>}
            
            {/* Si le pasamos un enlace, muestra el botón. Si no, no muestra nada. */}
            {enlace && <a href={enlace} className='mt-auto btn btn-outline-success'>Ver detalles</a>}
        </div>
    </div>
  )
}

export default Card;