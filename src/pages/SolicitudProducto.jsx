import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumenProducto from '../components/SolicitudProducto/ResumenProducto';
import FormularioSolicitud from '../components/SolicitudProducto/FormularioSolicitud';
import MensajeExito from '../components/SolicitudProducto/MensajeExito';

export default function SolicitudProducto() {
    const [enviadoConExito, setEnviadoConExito] = useState(false);
    
    const usuarioSesion = { 
        nombre: "Manuel Rodriguez", 
        dni: "12345678W", 
        email: "manuel.rodriguez@email.com" 
    };

    const productoMock = { 
        titulo: "Portátil Lenovo ThinkPad", 
        imagen: "https://picsum.photos/id/231/800/600", 
        descripcion: "Intel Core i5, 8GB RAM, 256GB SSD. Equipo reacondicionado bajo estándares de economía circular.",
        estado: "Reacondicionado",
        centroRecogida: "IES Doctor Balmis - Alicante" 
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-fill container py-5 pt-header align-content-center">
                {!enviadoConExito ? (
                    /* CENTRADO CON GRID:
                       - row: crea el contexto.
                       - justify-content-center: centra la columna.
                       - col-xl-10: en pantallas grandes ocupa 10 de 12 (aprox 1100px).
                    */
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-11 col-xxl-10">
                            
                            <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
                                <h2 className="titulo">Confirmar Solicitud</h2>
                                
                                <div className="row g-5 align-items-start">
                                    {/* Izquierda: Resumen */}
                                    <div className="col-lg-5">
                                        <ResumenProducto producto={productoMock} />
                                    </div>

                                    {/* Derecha: Formulario */}
                                    <div className="col-lg-7">
                                        <FormularioSolicitud 
                                            producto={productoMock} 
                                            usuario={usuarioSesion} 
                                            onSuccess={() => setEnviadoConExito(true)} 
                                        />
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