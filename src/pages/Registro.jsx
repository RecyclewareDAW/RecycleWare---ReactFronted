import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import FormCard from '../components/FormCard'; 
import CustomForm from '../components/CustomForm';

import SelectorPerfil from '../components/RegistroUsuarios/SelectorPerfil';
import DatosIdentificacion from '../components/RegistroUsuarios/DatosIdentificacion';
import DatosUbicacion from '../components/RegistroUsuarios/DatosUbicacion';
import DatosCuenta from '../components/RegistroUsuarios/DatosCuenta';
import TerminosLegales from '../components/RegistroUsuarios/TerminosLegales';

const Registro = () => {
    const [tipoPerfil, setTipoPerfil] = useState('particular');

    const handleSubmit = (event) => {
        console.log("Formulario válido, enviando datos...");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className='flex-fill container py-5 d-flex align-items-center justify-content-center'>
                
                {/* Usamos FormCard para la caja blanca */}
                <FormCard 
                    title="Crear una cuenta" 
                    subtitle="Únete a RecycleWare y dale una segunda vida a la tecnología."
                    colSize="col-lg-8"
                >
                    {/* Usamos CustomForm para la validación */}
                    <CustomForm onSubmit={handleSubmit}>
                        
                        <SelectorPerfil tipoPerfil={tipoPerfil} setTipoPerfil={setTipoPerfil} />
                        <DatosIdentificacion tipoPerfil={tipoPerfil} />
                        <DatosUbicacion tipoPerfil={tipoPerfil} />
                        <DatosCuenta />
                        <TerminosLegales />

                        <button type="submit" className="btn btn-primary w-100 mb-3 mt-2 rounded-pill">
                            Crear cuenta
                        </button>

                        <p className="text-center text-muted small mb-0">
                            ¿Ya tienes una cuenta? <Link to="/login" className="text-link fw-bold">Inicia sesión aquí</Link>
                        </p>

                    </CustomForm>
                </FormCard>
                
            </main>

            <Footer />
        </div>
    );
};



// const Registro = () => {
//     const [tipoPerfil, setTipoPerfil] = useState('particular');
//     const [validated, setValidated] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const form = event.currentTarget;

//         if (form.checkValidity() === false) {
//             event.stopPropagation();
//         } else {
//             console.log("Formulario válido, enviando datos...");
//         }
//         setValidated(true);
//     };

//     return (
//         <div className="d-flex flex-column min-vh-100">
            
//             <Header />

//             <main className='flex-fill container py-5'>
//                 <div className="row justify-content-center">

//                     <div className="col-12 col-lg-8">
//                         <div className="bg-white py-5 px-4 px-md-5 rounded-4 border shadow-sm">
                            
//                             <h2 className="mb-4 titulo">Crear una cuenta</h2>
//                             <p className="text-center text-muted mb-4">Únete a RecycleWare y dale una segunda vida a la tecnología.</p>

//                             <form
//                                 noValidate
//                                 onSubmit={handleSubmit}
//                                 className={`needs-validation ${validated ? 'was-validated' : ''}`}
//                             >
//                                 <SelectorPerfil tipoPerfil={tipoPerfil} setTipoPerfil={setTipoPerfil} />
                                
//                                 <DatosIdentificacion tipoPerfil={tipoPerfil} />
                                
//                                 <DatosUbicacion tipoPerfil={tipoPerfil} />
                                
//                                 <DatosCuenta />
                                
//                                 <TerminosLegales />

//                                 <button type="submit" className="btn btn-primary w-100 py-2 mb-3 mt-2">
//                                     Crear cuenta
//                                 </button>

//                                 <p className="text-center text-muted small mb-0">
//                                     ¿Ya tienes una cuenta? <Link to="/login" className="text-secondary text-decoration-none fw-bold">Inicia sesión aquí</Link>
//                                 </p>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//             <Footer />
//         </div>
//     );
// };

export default Registro;