import Header from '../components/Header';
import Footer from '../components/Footer';
import FormularioRecuperar from '../components/Auth/FormularioRecuperar';

export default function RecuperarContrasena() {
    return (
        <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-smooth-scroll="true" tabIndex={0}>
            <div className="d-flex flex-column min-vh-100">
                <Header />

                <main className='flex-fill container d-flex justify-content-center align-items-center py-5'>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 mx-auto">
                        <FormularioRecuperar />
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}