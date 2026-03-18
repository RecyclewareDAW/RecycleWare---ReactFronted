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
            //Accedemos a la base de datos y filtramos por IDs 3, 4 y 5 "Aprobada, Degenada, Entregada"
            const pasadas = data.filter(r => r.state?.id === 3 || r.state?.id === 4 || r.state?.id === 5);
            pasadas.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));
            setHistorial(pasadas);
        } catch (error) {
            console.error("Error al obtener el historial:", error);
        } finally {
            setCargando(false);
        }
    };

    // Función que solo asigna clases de nuestro Bootstrap con texto blanco para añadir contraste
    const getEstadoClase = (id) => {
        const clases = {
            3: 'bg-success bg-opacity-10 text-success border border-success border-opacity-25', // Aprobada
            4: 'bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25',  // Denegada
            5: 'bg-info bg-opacity-10 text-info border border-info border-opacity-25'  // Entregada
        };
        return clases[id] || 'bg-secondary text-white';
    };

    if (cargando) return <div className="text-center p-5"><div className="spinner-border text-secondary"></div></div>;

    return (
        <div className="container-fluid animate-fade-in p-0">
            <h2 className="titulo">Historial de Peticiones</h2>

            {historial.length === 0 ? (
                <div className="alert alert-light border shadow-sm rounded-4 text-dark">Aún no hay equipos en tu historial.</div>
            ) : (
                <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                    <div className="table-responsive bg-white">
                        <table className="table mb-0 bg-white">
                            <thead className="table-info">
                                <tr>
                                    <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Equipo</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Fecha</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Resolución</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {historial.map((h) => (
                                    <tr key={h.id} className="align-middle border-bottom bg-white">
                                        <td className="ps-4 py-4 text-dark bg-white border-0">
                                            {h.product?.nombre || 'Producto Desconocido'}
                                        </td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            <span className="small text-dark fw-medium">
                                                <i className="bi bi-calendar3 me-2 text-muted"></i>
                                                {new Date(h.requestDate).toLocaleDateString('es-ES')}
                                            </span>
                                        </td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            {/* Inyectamos la clase y el nombre directamente de la base de datos */}
                                            <span className={`badge rounded-pill px-3 py-2 border border-opacity-25 ${getEstadoClase(h.state?.id)}`}>
                                                {h.state?.nombre || h.state?.name || h.state?.estado || 'Estado ' + h.state?.id}
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