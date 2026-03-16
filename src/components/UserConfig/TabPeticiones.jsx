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
            // Accedemos a la base de datos y filtramos por IDs 1 y 2 "Pendiente y En Revisión"
            const activas = data.filter(r => r.state?.id === 1 || r.state?.id === 2);
            activas.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
            setPeticiones(activas);
        } catch (error) {
            console.error("Error al obtener peticiones:", error);
        } finally {
            setCargando(false);
        }
    };

    // Función que solo asigna clases de nuestro Bootstrap con texto blanco para añadir contraste
    const getEstadoClase = (id) => {
        const clases = {
            1: 'bg-warning text-dark', // Pendiente
            2: 'bg-info text-dark'     // En Revisión
        };
        return clases[id] || 'bg-secondary text-white';
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
                            <thead className="table-info">
                                <tr>
                                    <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Equipo Solicitado</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Fecha</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {peticiones.map((p) => (
                                    <tr key={p.id} className="align-middle border-bottom bg-white">
                                        <td className="ps-4 py-4 text-dark bg-white border-0">
                                            {p.product?.nombre || 'Producto Desconocido'}
                                        </td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            <span className="small text-dark fw-medium">
                                                <i className="bi bi-calendar3 me-2 text-muted"></i>
                                                {new Date(p.requestDate).toLocaleDateString('es-ES')}
                                            </span>
                                        </td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            {/* Inyectamos la clase y el nombre directamente de la base de datos */}
                                            <span className={`badge rounded-pill px-3 py-2 border border-opacity-25 ${getEstadoClase(p.state?.id)}`}>
                                                {p.state?.nombre || p.state?.name || p.state?.estado || 'Estado ' + p.state?.id}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}