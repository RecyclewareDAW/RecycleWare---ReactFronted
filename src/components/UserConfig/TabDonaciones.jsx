import { useState, useEffect } from 'react';

export default function TabDonaciones() {
    const [donaciones, setDonaciones] = useState([]);
    const [estados, setEstados] = useState([]);
    const [cargando, setCargando] = useState(true);

    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');
    const userId = userSession.id;

    useEffect(() => {
        if (userId) obtenerDatos();
        else setCargando(false);
    }, [userId]);

    const obtenerDatos = async () => {
        try {
            const [resDonaciones, resEstados] = await Promise.all([
                fetch(`http://localhost:8080/api/donations/usuario/${userId}`),
                fetch(`http://localhost:8080/api/donation-states`)
            ]);
            if (!resDonaciones.ok || !resEstados.ok) throw new Error("Error");
            
            const data = await resDonaciones.json();
            // Ordenamos para que las más nuevas aparezcan arriba
            setDonaciones(data.sort((a, b) => new Date(b.fechaDonacion) - new Date(a.fechaDonacion)));
            setEstados(await resEstados.json());
        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    };

    if (cargando) return <div className="text-center p-5"><div className="spinner-border text-success"></div></div>;

    return (
        <div className="container-fluid py-4 animate-fade-in p-0">
            <h2 className="titulo">Mis Donaciones</h2>

            {donaciones.length === 0 ? (
                <div className="alert alert-light border shadow-sm rounded-4 text-dark">No hay donaciones registradas.</div>
            ) : (
                <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                    <div className="table-responsive bg-white">
                        <table className="table mb-0 bg-white">
                            <thead className="table-info">
                                <tr>
                                    <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Descripción</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Fecha</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Cantidad</th>
                                    <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {donaciones.map((d) => (
                                    <tr key={d.id} className="align-middle border-bottom bg-white">
                                        <td className="ps-4 py-4 text-primary bg-white">{d.descripcion}</td>
                                        <td className="text-center bg-white border-0 text-muted small text-nowrap">
                                            <i className="bi bi-calendar3 me-2"></i>
                                            {new Date(d.fechaDonacion).toLocaleDateString('es-ES', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            <span className="small text-primary px-3 py-2 fw-medium">
                                                {d.cantidadProductos} ud
                                            </span>
                                        </td>
                                        <td className="text-center bg-white border-0">
                                            <span className={`badge rounded-pill px-3 py-2 ${d.estado.id === 1
                                                    ? 'bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25'
                                                    : d.estado.id === 2
                                                        ? 'bg-info bg-opacity-10 text-info border border-info border-opacity-25'
                                                        : 'bg-success bg-opacity-10 text-success border border-success border-opacity-25'
                                                }`}>
                                                {d.estado.nombre}
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