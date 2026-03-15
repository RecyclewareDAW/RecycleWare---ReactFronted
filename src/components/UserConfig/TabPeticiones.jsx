import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export default function TabPeticiones() {
    const [peticiones, setPeticiones] = useState([]);
    const [cargando, setCargando] = useState(true);

    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');
    const userId = userSession.id;

    useEffect(() => {
        if (userId) obtenerDatos();
        else setCargando(false);
    }, [userId]);

    const obtenerDatos = async () => {
        try {
            const data = await api.get(`/solicitudes/usuario/${userId}`);
            
            // Filtramos SOLO las activas (1 = Pendiente, 2 = En Recogida)
            const activas = data.filter(r => r.state?.id === 1 || r.state?.id === 2);
            
            activas.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
            setPeticiones(activas);
        } catch (error) {
            console.error("Error al obtener peticiones:", error);
        } finally {
            setCargando(false);
        }
    };

    // Diccionario visual para los estados activos
    const getEstadoInfo = (estado) => {
        if (estado?.id === 1) return { texto: 'Pendiente', clase: 'bg-warning bg-opacity-10 text-warning border-warning' };
        if (estado?.id === 2) return { texto: 'En Recogida', clase: 'bg-info bg-opacity-10 text-info border-info' };
        return { texto: estado?.nombre || 'Desconocido', clase: 'bg-secondary bg-opacity-10 text-secondary border-secondary' };
    };

    if (cargando) return <div className="text-center p-5"><div className="spinner-border text-primary"></div></div>;

    return (
        <div className="container-fluid py-4 animate-fade-in p-0">
            <h2 className="titulo">Peticiones Activas</h2>

            {peticiones.length === 0 ? (
                <div className="alert alert-light border shadow-sm rounded-4 text-dark">No tienes ninguna petición activa en este momento.</div>
            ) : (
                <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                    <div className="table-responsive bg-white">
                        <table className="table mb-0 bg-white">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Equipo Solicitado</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Fecha</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {peticiones.map((p) => {
                                    const estadoInfo = getEstadoInfo(p.state);
                                    return (
                                        <tr key={p.id} className="align-middle border-bottom bg-white">
                                            <td className="ps-4 py-4 text-primary fw-medium bg-white">
                                                {p.product?.nombre || 'Producto Desconocido'}
                                            </td>
                                            <td className="text-center bg-white border-0 text-muted small text-nowrap">
                                                <i className="bi bi-calendar3 me-2"></i>
                                                {new Date(p.requestDate).toLocaleDateString('es-ES')}
                                            </td>
                                            <td className="text-center bg-white border-0">
                                                <span className={`badge rounded-pill px-3 py-2 border border-opacity-25 ${estadoInfo.clase}`}>
                                                    {estadoInfo.texto}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}