import { useState, useEffect } from 'react';
import { api } from '../../services/api';

export default function TabHistorial() {
    const [historial, setHistorial] = useState([]);
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
            
            // Filtramos SOLO las finalizadas (3 = Recibido, 4 = Procesado)
            const pasadas = data.filter(r => r.state?.id === 3 || r.state?.id === 4);
            
            pasadas.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
            setHistorial(pasadas);
        } catch (error) {
            console.error("Error al obtener el historial:", error);
        } finally {
            setCargando(false);
        }
    };

    // Diccionario visual para los estados del historial
    const getEstadoInfo = (estado) => {
        if (estado?.id === 3) return { texto: 'Recibido', clase: 'bg-primary bg-opacity-10 text-primary border-primary' };
        if (estado?.id === 4) return { texto: 'Procesado', clase: 'bg-success bg-opacity-10 text-success border-success' };
        return { texto: estado?.nombre || 'Finalizada', clase: 'bg-secondary bg-opacity-10 text-secondary border-secondary' };
    };

    if (cargando) return <div className="text-center p-5"><div className="spinner-border text-secondary"></div></div>;

    return (
        <div className="container-fluid py-4 animate-fade-in p-0">
            <h2 className="titulo">Historial de Peticiones</h2>

            {historial.length === 0 ? (
                <div className="alert alert-light border shadow-sm rounded-4 text-dark">Aún no hay equipos en tu historial.</div>
            ) : (
                <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                    <div className="table-responsive bg-white">
                        <table className="table mb-0 bg-white">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Equipo</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Fecha</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Resolución</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {historial.map((h) => {
                                    const estadoInfo = getEstadoInfo(h.state);
                                    return (
                                        <tr key={h.id} className="align-middle border-bottom bg-white">
                                            <td className="ps-4 py-4 text-secondary fw-medium bg-white">
                                                {h.product?.nombre || 'Producto Desconocido'}
                                            </td>
                                            <td className="text-center bg-white border-0 text-muted small text-nowrap">
                                                <i className="bi bi-calendar3 me-2"></i>
                                                {new Date(h.requestDate).toLocaleDateString('es-ES')}
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