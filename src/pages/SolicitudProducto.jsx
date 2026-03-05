import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumenProducto from '../components/SolicitudProducto/ResumenProducto';
import FormularioSolicitud from '../components/SolicitudProducto/FormularioSolicitud';
import MensajeExito from '../components/SolicitudProducto/MensajeExito';

export default function SolicitudProducto() {
    const { id } = useParams(); 
    
    const [validated, setValidated] = useState(false);
    const [enviadoConExito, setEnviadoConExito] = useState(false);

    // MOCK
    const productoMock = {
        id: id || "1",
        titulo: "Portátil Lenovo ThinkPad",
        descripcion: "Intel Core i5, 8GB RAM, 256GB SSD. Equipo reacondicionado listo para ofimática y estudio.",
        estado: "Reacondicionado",
        imagen: "https://picsum.photos/id/231/600/600",
        centroRecogida: "IES Doctor Balmis - Alicante" 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        } else {
            setEnviadoConExito(true);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className='flex-fill container py-5'>
                <div className="bg-white py-4 px-4 px-md-5 rounded-4 border shadow-sm max-w-lg mx-auto">
                    <h2 className="mb-5 titulo">Solicitar Equipo</h2>

                    {!enviadoConExito ? (
                        <div className="row g-5 align-items-center">
                            <ResumenProducto producto={productoMock} />
                            <FormularioSolicitud 
                                producto={productoMock} 
                                handleSubmit={handleSubmit} 
                                validated={validated} 
                            />
                        </div>
                    ) : (
                        <MensajeExito producto={productoMock} />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}