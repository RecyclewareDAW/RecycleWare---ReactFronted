//Home
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
export default function Home() {
    return <>
        {/* <h1 className='display-1'>Patata Placeholder<p className="bi bi-briefcase text-danger"></p></h1>
        <div className="bi bi-star-fill text-danger">Estrella</div>
        <Link to="/estrella" className='btn btn-sm text-danger'>Navegación de testeo</Link> */}
        <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-smooth-scroll="true"
            tabIndex={0}
        >
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <Hero />
            </div>
{/* 
            <main>
                <Categorias />
                <hr />
                <Comunidad />
                <hr className="my-5 opacity-25" />
                <Info />
                <hr />
                <Contacto />
            </main>

            <Footer /> */}
        </div>

    </>
}