import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; // 1. Importamos useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumenProducto from '../components/SolicitudProducto/ResumenProducto';
import FormularioSolicitud from '../components/SolicitudProducto/FormularioSolicitud';
import MensajeExito from '../components/SolicitudProducto/MensajeExito';
import { api } from '../services/api'; 

export default function SolicitudProducto() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [enviadoConExito, setEnviadoConExito] = useState(false);
    const [usuarioSesion, setUsuarioSesion] = useState(null);
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

   
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
        if (usuarioGuardado) {
            setUsuarioSesion(JSON.parse(usuarioGuardado));
        } else {
            
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [navigate, location]); 

    
    useEffect(() => {
        const cargarProducto = async () => {
            try {
                setCargando(true);
                const datosProducto = await api.get(`/productos/${id}`);
                setProducto(datosProducto);
            } catch (err) {
                console.error("Error al cargar el producto:", err);
                setError("No hemos podido cargar los detalles del producto. Es posible que ya no esté disponible.");
            } finally {
                setCargando(false);
            }
        };

        if (id) {
            cargarProducto();
        }
    }, [id]);

    if (!usuarioSesion) return null;

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-fill container py-5 pt-header align-content-center">
                
                {cargando && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando producto...</span>
                        </div>
                        <p className="mt-3 text-muted fw-bold">Preparando tu solicitud...</p>
                    </div>
                )}

                {!cargando && error && (
                    <div className="alert alert-danger text-center fw-bold shadow-sm">
                        <i className="bi bi-exclamation-triangle-fill me-2 fs-4 d-block mb-2"></i>
                        {error}
                    </div>
                )}

               
                {!cargando && !error && producto && !enviadoConExito && (
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-11 col-xxl-10">
                            <div className="bg-white p-4 p-md-5 rounded-4 border shadow-sm">
                                <h2 className="titulo">Confirmar Solicitud</h2>
                                
                                <div className="row g-5 align-items-start">
                                    <div className="col-lg-5">
                                        <ResumenProducto producto={producto} />
                                    </div>

                                    <div className="col-lg-7">
                
                                        <FormularioSolicitud 
                                            producto={producto} 
                                            usuario={usuarioSesion} 
                                            onSuccess={() => setEnviadoConExito(true)} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mensaje de Éxito */}
                {!cargando && !error && producto && enviadoConExito && (
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 animate-fade-in">
                            <MensajeExito producto={producto} />
                        </div>
                    </div>
                )}

            </main>
            <Footer />
        </div>
    );
}