import { useState, useEffect } from 'react';
import { api } from '../../services/api';

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
            const data = await api.get(`/donaciones/usuario/${userId}`);

            // FILTRO POR ESTADO: Solo IDs 3 (Recibido) y 4 (Procesado)
            const donacionesValidadas = data.filter(d => d.estado.id === 3 || d.estado.id === 4);

            // Calculamos totales basados solo en lo que YA RECIBIMOS O HEMOS PROCESADO
            const totalEquipos = donacionesValidadas.reduce((acc, d) => acc + (d.cantidadProductos || 0), 0);

            setStats({
                equipos: totalEquipos,
                co2: totalEquipos * 25
            });
            
            setListaDonaciones(donacionesValidadas);
            
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
            <div className="bg-white rounded-4 shadow-sm border overflow-hidden">
                <div className="table-responsive bg-white">
                    <table className="table mb-0 bg-white">
                        <thead className="table-info">
                            <tr>
                                <th className="ps-4 py-3 text-dark fw-bold small text-uppercase border-0">Descripción del Lote</th>
                                <th className="py-3 text-dark fw-bold small text-uppercase text-center border-0">Unidades</th>
                                <th className="py-3 text-dark fw-bold small text-uppercase text-end pe-4 border-0">Ahorro CO₂</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {listaDonaciones.length > 0 ? (
                                listaDonaciones.map((d) => (
                                    <tr key={d.id} className="align-middle border-bottom bg-white">
                                        <td className="ps-4 py-4 text-dark bg-white border-0">{d.descripcion}</td>
                                        <td className="text-center bg-white border-0 text-nowrap">
                                            <span className="small text-primary px-3 py-2 fw-medium">
                                                {d.cantidadProductos} ud
                                            </span>
                                        </td>
                                        <td className="text-end pe-4 bg-white border-0 text-info fw-bold text-nowrap">
                                            +{d.cantidadProductos * 25} kg
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center text-muted py-4 bg-white border-0">
                                        Aún no hay datos de impacto registrados.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}