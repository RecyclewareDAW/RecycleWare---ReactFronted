import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import FormCard from '../components/FormCard';
import CustomForm from '../components/CustomForm';

import SelectorPerfil from '../components/RegistroUsuarios/SelectorPerfil';
import DatosIdentificacion from '../components/RegistroUsuarios/DatosIdentificacion';
import DatosUbicacion from '../components/RegistroUsuarios/DatosUbicacion';
import DatosCuenta from '../components/RegistroUsuarios/DatosCuenta';
import TerminosLegales from '../components/RegistroUsuarios/TerminosLegales';

import CustomButton from '../components/CustomButton';

import { api } from '../services/api';

const Registro = () => {
    const navigate = useNavigate();
    const [tipoPerfil, setTipoPerfil] = useState('particular');
    const [errorMensaje, setErrorMensaje] = useState(''); 

    const [formData, setFormData] = useState({
        nombre: '',
        personaContacto: '',
        documento: '',
        telefono: '',
        telefonoSecundario: '',
        direccion: '',
        cp: '',
        localidad: '',
        emailRegistro: '',
        passwordRegistro: '',
        confirmPassword: '',
        terminos: false
    });

   
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
        setErrorMensaje('');
    };

    const handleSubmit = async (event) => {
        
        if (formData.passwordRegistro !== formData.confirmPassword) {
            setErrorMensaje("Las contraseñas no coinciden.");
            return;
        }

        
        const userParaJava = {
            nombre: formData.nombre,
            dni: formData.documento, 
            telefono: formData.telefono,
            correo: formData.emailRegistro,
            password: formData.passwordRegistro,
            direccion: formData.direccion || 'No especificada', 
            localidad: formData.localidad,
            codigoPostal: formData.cp,
            razonSocial: tipoPerfil === 'empresa' ? formData.nombre : null,
            nombreContacto: tipoPerfil === 'empresa' ? formData.personaContacto : null,
            rol: tipoPerfil === 'empresa' ? 'EMPRESA' : 'PARTICULAR'
        };

        try {
      
            const respuesta = await api.post('/usuario', userParaJava);
            console.log("¡Éxito!", respuesta);
            navigate('/login',{
                state: { mensajeExito: "¡Cuenta creada con éxito! Ya puedes iniciar sesión." }
            });
        } catch (error) {
           
            if (error.message.includes('Duplicate entry') || error.message.includes('DataIntegrityViolationException')) {
                setErrorMensaje("El correo electrónico o el DNI/NIE o CIF ya están registrados en nuestro sistema.");
            } else{
                setErrorMensaje("Ha ocurrido un error al crear la cuenta. Revisa tus datos e inténtalo de nuevo.");
            }
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className='flex-fill container py-5 d-flex align-items-center justify-content-center'>

              
                <FormCard
                    title="Crear una cuenta"
                    subtitle="Únete a RecycleWare y dale una segunda vida a la tecnología."
                    colSize="col-12"
                >
                  
                    {errorMensaje && (
                        <div className="alert alert-danger text-center fw-bold">{errorMensaje}</div>
                    )}

                   
                    <CustomForm onSubmit={handleSubmit}>
                        
                        <SelectorPerfil tipoPerfil={tipoPerfil} setTipoPerfil={setTipoPerfil} />
                        
                        {/* Pasamos formData y handleChange a los hijos (DatosIdentificacion,etc) */}
                        <DatosIdentificacion tipoPerfil={tipoPerfil} formData={formData} handleChange={handleChange} />
                        <DatosUbicacion tipoPerfil={tipoPerfil} formData={formData} handleChange={handleChange} />
                        <DatosCuenta formData={formData} handleChange={handleChange} />
                        <TerminosLegales formData={formData} handleChange={handleChange} />

                        <CustomButton type="submit">
                            Crear Cuenta
                        </CustomButton>

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

export default Registro;