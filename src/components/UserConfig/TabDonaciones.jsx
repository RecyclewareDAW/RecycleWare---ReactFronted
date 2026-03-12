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
        <div className="container-fluid py-4 animate-fade-in">
            <h2 className="h4 fw-bold mb-4 text-dark border-bottom pb-2">Mis Donaciones</h2>
            
            {donaciones.length === 0 ? (
                <div className="alert alert-light border shadow-sm">No hay donaciones registradas.</div>
            ) : (
                <div className="bg-white rounded shadow-sm">
                    <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                            <thead className="border-bottom table-success">
                                <tr>
                                    <th className="ps-4 py-3 text-primary fw-bold small text-uppercase">Descripción</th>
                                    <th className="py-3 text-primary fw-bold small text-uppercase text-center">Cantidad</th>
                                    <th className="py-3 text-primary fw-bold small text-uppercase text-center">Peso</th>
                                    <th className="py-3 text-primary fw-bold small text-uppercase text-center">Estado</th>
                                    {/* <th className="pe-4 py-3 text-primary fw-bold small text-uppercase text-end">Acción</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {donaciones.map((d) => (
                                    <tr key={d.id} className="align-middle border-bottom">
                                        <td className="ps-4 py-4 text-dark">{d.descripcion}</td>
                                        <td className="text-center">
                                            <span className="badge rounded-pill bg-white text-dark border fw-normal">
                                                {d.cantidadProductos} ud
                                            </span>
                                        </td>
                                        <td className="text-center text-muted">{d.peso ? `${d.peso} kg` : '-'}</td>
                                        <td className="text-center">
                                            <span className={`badge rounded-pill px-3 py-2 ${
                                                d.estado.id === 1 ? 'bg-warning-subtle text-warning-emphasis border border-warning' : 
                                                d.estado.id === 2 ? 'bg-info-subtle text-info-emphasis border border-info' : 
                                                'bg-success-subtle text-success-emphasis border border-success'
                                            }`}>
                                                {d.estado.nombre}
                                            </span>
                                        </td>
                                        {/* <td className="pe-4 text-end">
                                            <select 
                                                value={d.estado.id} 
                                                onChange={(e) => cambiarEstado(d.id, e.target.value)}
                                                className="form-select form-select-sm d-inline-block w-auto bg-white border-info shadow-sm"
                                            >
                                                {estados.map(est => (
                                                    <option key={est.id} value={est.id}>{est.nombre}</option>
                                                ))}
                                            </select>
                                        </td> */}
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