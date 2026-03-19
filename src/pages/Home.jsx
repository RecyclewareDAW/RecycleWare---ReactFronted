import { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
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
            
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
           
            window.scrollTo(0, 0);
        }
    }, [location]); 

    return <>

        <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-smooth-scroll="true"
            tabIndex={0}
        >
            <Header />
            <Hero />

            <main>
                <Info />
                <Categorias />
                <Comunidad />
                <Contacto />
            </main>

            <Footer />
        </div>

    </>
}