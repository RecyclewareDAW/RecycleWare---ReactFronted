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
    const [errorMensaje, setErrorMensaje] = useState(''); // para mostrar los errores del backend

    // aqui guardamos todo lo que el usuario escriba
    const [formData, setFormData] = useState({
        nombre: '',
        personaContacto: '',
        documento: '',
        telefono: '',
        telefonoSecundario: '',
        direccion: '',
        cp: '',
        provincia: '',
        emailRegistro: '',
        passwordRegistro: '',
        confirmPassword: '',
        terminos: false
    });

    // funcion para actualizar datos
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (event) => {
        // Validación extra de React
        if (formData.passwordRegistro !== formData.confirmPassword) {
            setErrorMensaje("Las contraseñas no coinciden.");
            return;
        }

        // mapeo para java: Transformamos el formData de React para el User.java
        const userParaJava = {
            nombre: formData.nombre,
            dni: formData.documento, // En react lo tenemos como "documento" y en Java como "dni"
            telefono: formData.telefono,
            correo: formData.emailRegistro,
            password: formData.passwordRegistro,
            direccion: tipoPerfil === 'empresa' ? formData.direccion : 'No especificada', 
            provincia: formData.provincia,
            codigoPostal: formData.cp,
            razonSocial: tipoPerfil === 'empresa' ? formData.nombre : null,
            nombreContacto: tipoPerfil === 'empresa' ? formData.personaContacto : null
        };

        try {
            // mandamos a SPRING BOOT
            const respuesta = await api.post('/users', userParaJava);
            console.log("¡Éxito!", respuesta);
            // Si todo va bien, lo enviamos a Iniciar Sesión
            navigate('/login');
        } catch (error) {
            // Si Java devuelve un error (ej. Correo ya existe), lo mostramos
            setErrorMensaje(error.message);
        }
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
                    {/* Alerta de errores 
                    {errorMensaje && (
                        <div className="alert alert-danger text-center fw-bold">{errorMensaje}</div>
                    )} */}

                    {/* Usamos CustomForm para la validación */}
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