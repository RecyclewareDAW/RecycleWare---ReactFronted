import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Home/Hero';
import Info from '../components/Home/Info';
import Contacto from '../components/Home/Contacto';
import Categorias from '../components/Home/Categorias';
import Footer from '../components/Footer';
import Comunidad from '../components/Home/Comunidad';

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            // Buscamos el elemento (quitando el '#' de la cadena)
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            
            if (element) {
                // Hacemos scroll suave. El setTimeout es necesario a veces 
                // para darle a React unos milisegundos para renderizar la página antes de moverla
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); 
            }
        } else {
            // Si la URL no tiene '#', nos aseguramos de estar arriba del todo
            window.scrollTo(0, 0);
        }
    }, [location]); // Se ejecuta cada vez que cambia la URL
    
    return <>

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

            <main>
               <Categorias />
                <Comunidad/>
                <Info />
                <hr />
                <Contacto />
            </main>

            <Footer />
        </div>

    </>
}