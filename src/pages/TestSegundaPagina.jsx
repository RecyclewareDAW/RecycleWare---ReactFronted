//Pagina de ejemplo de navegación e iconos
import { Link } from 'react-router-dom';
export default function SegundaPagina() {
    return <div className='d-flex flex-column'>
        <h1 className='text-secondary'>Segunda Pagina <span className='bi bi-arrow-right'></span></h1>
        <Link  to="/" className="btn btn-sm  text-dark mx-2 bg-success-subtle">Volver a Home</Link>
        
    </div>
}