import Header from '../components/Header';
import Footer from '../components/Footer';
import FormRecuperar from '../components/Auth/FormularioRecuperar';

export default function RecuperarContrasena() {
    return (
        <div
                       data-bs-spy="scroll"
                       data-bs-target=".navbar"
                       data-bs-smooth-scroll="true"
                       tabIndex={0}
                   >
                       <div className="d-flex flex-column min-vh-100">
                           <Header />
       
       
                           <main className='flex-fill'>
       
                            <FormRecuperar></FormRecuperar>
                           </main>
       
                           <Footer />
                       </div>
                   </div>
    );
}