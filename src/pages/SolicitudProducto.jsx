import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumenProducto from '../components/SolicitudProducto/ResumenProducto';
import FormularioSolicitud from '../components/SolicitudProducto/FormularioSolicitud';
import MensajeExito from '../components/SolicitudProducto/MensajeExito';

export default function SolicitudProducto() {
    const [enviadoConExito, setEnviadoConExito] = useState(false);
    
    // 1. Empezamos con el usuario en null
    const [usuarioSesion, setUsuarioSesion] = useState(null);

    // 2. Al cargar la página, buscamos al usuario en la memoria del navegador
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
        if (usuarioGuardado) {
            setUsuarioSesion(JSON.parse(usuarioGuardado));
        }
    }, []);

    // 3. Dejamos el producto estático DE MOMENTO (lo cambiaremos en el siguiente paso)
    const productoMock = { 
        titulo: "Portátil Lenovo ThinkPad", 
        imagen: "https://picsum.photos/id/231/800/600", 
        descripcion: "Intel Core i5, 8GB RAM, 256GB SSD. Equipo reacondicionado bajo estándares de economía circular.",
        estado: "Buen Estado",
        centroRecogida: "IES Doctor Balmis - Alicante",
        id: 1 // ¡Añadimos un ID falso para que el backend no falle al guardar!
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-fill container py-5 pt-header align-content-center">
                {!enviadoConExito ? (
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-11 col-xxl-10">
                            
                            <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
                                <h2 className="titulo">Confirmar Solicitud</h2>
                                
                                <div className="row g-5 align-items-start">
                                    <div className="col-lg-5">
                                        <ResumenProducto producto={productoMock} />
                                    </div>

                                    <div className="col-lg-7">
                                        {/* Si el usuario no ha cargado, o no está logueado, le avisamos */}
                                        {!usuarioSesion ? (
                                            <div className="alert alert-warning">
                                                Inicia sesión para poder realizar una solicitud.
                                            </div>
                                        ) : (
                                            /* Si está logueado, le pasamos sus datos reales al formulario */
                                            <FormularioSolicitud 
                                                producto={productoMock} 
                                                usuario={usuarioSesion} 
                                                onSuccess={() => setEnviadoConExito(true)} 
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 animate-fade-in">
                            <MensajeExito producto={productoMock} />
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}