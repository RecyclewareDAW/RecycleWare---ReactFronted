//Home
import { Link } from 'react-router-dom';
export default function Home() {
    return <>
        <h1 className='display-1'>Patata Placeholder<p className="bi bi-briefcase text-danger"></p></h1>
        <div className="bi bi-star-fill text-danger">Estrella</div>
        <Link to="/estrella" className='btn btn-sm text-danger'>Navegación de testeo</Link>
        
    </>
}