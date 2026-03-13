import { useState, useEffect } from 'react';

export default function TabImpacto() {
    const [stats, setStats] = useState({ equipos: 0, co2: 0 });
    const [listaDonaciones, setListaDonaciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');
    const userId = userSession.id;

    useEffect(() => {
        if (userId) fetchDatosImpacto();
    }, [userId]);

    const fetchDatosImpacto = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/donations/user/${userId}`);
            const data = await response.json();
            
            // Calculamos totales
            const totalEquipos = data.reduce((acc, d) => acc + (d.cantidadProductos || 0), 0);
            
            setStats({
                equipos: totalEquipos,
                co2: totalEquipos * 25 // 25kg CO2 por equipo
            });
            setListaDonaciones(data);
        } catch (error) {
            console.error("Error cargando impacto:", error);
        } finally {
            setCargando(false);
        }
    };

    if (cargando) return <div className="p-4 text-center fw-bold">Calculando impacto...</div>;

    return (
        <div className="container-fluid animate-fade-in p-0">
            <h2 className="titulo">Mi Impacto Ambiental</h2>
            <p className="text-muted mb-4">
                Este es el resumen del beneficio ecológico generado por tus donaciones.
            </p>

            {/* Tarjetas principales */}
            <div className="row g-4 mb-5">
                <div className="col-12 col-md-6">
                    <div className="p-4 rounded-4 text-center border border-success-subtle bg-success-subtle text-success shadow-sm">
                        <i className="bi bi-tree fs-1 mb-2"></i>
                        <h2 className="display-5 fw-bold mb-0">{stats.co2} kg</h2>
                        <div className="fw-bold small opacity-75">CO₂ TOTAL AHORRADO</div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="p-4 rounded-4 text-center border border-warning-subtle bg-warning-subtle text-warning shadow-sm">
                        <i className="bi bi-laptop fs-1 mb-2"></i>
                        <h2 className="display-5 fw-bold mb-0">{stats.equipos}</h2>
                        <div className="fw-bold small opacity-75">EQUIPOS REUTILIZADOS</div>
                    </div>
                </div>
            </div>

            {/* Desglose detallado para rellenar el espacio */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-header bg-white border-0 pt-4 px-4">
                    <h5 className="fw-bold text-primary mb-0">Detalle por contribución</h5>
                </div>
                <div className="card-body p-4">
                    {listaDonaciones.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th className="border-0 text-dark">Descripción del Lote</th>
                                        <th className="border-0 text-center text-dark">Unidades</th>
                                        <th className="border-0 text-end text-dark">Ahorro CO₂</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaDonaciones.map((d) => (
                                        <tr key={d.id}>
                                            <td className="text-muted small">{d.descripcion}</td>
                                            <td className="text-center fw-bold text-primary">{d.cantidadProductos}</td>
                                            <td className="text-end text-info fw-bold">
                                                +{d.cantidadProductos * 25} kg
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-muted my-4">Aún no hay datos de impacto registrados.</p>
                    )}
                </div>
            </div>
        </div>
    );
}