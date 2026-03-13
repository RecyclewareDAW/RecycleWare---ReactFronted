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
                fetch(`http://localhost:8080/api/donations/user/${userId}`),
                fetch(`http://localhost:8080/api/donation-states`)
            ]);
            if (!resDonaciones.ok || !resEstados.ok) throw new Error("Error");
            setDonaciones(await resDonaciones.json());
            setEstados(await resEstados.json());
        } catch (error) {
            console.error(error);
        } finally {
            setCargando(false);
        }
    };

    const cambiarEstado = async (donationId, nuevoEstadoId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/donations/${donationId}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idEstado: parseInt(nuevoEstadoId) })
            });
            if (response.ok) obtenerDatos();
            else alert("Error al actualizar");
        } catch (error) {
            console.error(error);
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
                                <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Cantidad</th>
                                <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Estado</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {donaciones.map((d) => (
                                <tr key={d.id} className="align-middle border-bottom bg-white">
                                    <td className="ps-4 py-4 text-dark bg-white border-0">{d.descripcion}</td>
                                    <td className="text-center bg-white border-0">
                                        <span className="small text-primary px-3 py-2 fw-medium">
                                            {d.cantidadProductos} ud
                                        </span>
                                    </td>
                                    <td className="text-center bg-white border-0">
                                        <span className={`badge rounded-pill px-3 py-2 shadow-sm ${
                                            d.estado.id === 1 ? 'bg-warning text-primary' : 
                                            d.estado.id === 2 ? 'bg-info text-white' : 
                                            'bg-success text-white'
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