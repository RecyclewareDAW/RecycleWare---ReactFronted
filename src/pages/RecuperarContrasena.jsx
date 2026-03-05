import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioRecuperar from '../components/Auth/FormularioRecuperar';

export default function RecuperarContrasena() {
    return (
        <>
            <Header />
             
            <main className="container my-5 py-5 d-flex justify-content-center align-items-center">
                
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto mt-5">
                    <FormularioRecuperar />
                </div>
                
            </main>

            <Footer />
        </>
    );
}