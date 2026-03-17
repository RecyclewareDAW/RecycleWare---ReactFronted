// export default function UltimaDonacion() {
//     return <>
//         <div className="card h-100 border-success bg-white text-dark">
//             <div className="card-body text-center">
//                 <span className="badge bg-success mb-2">Nueva donación</span>
//                 <h3 className="h5 card-title">TechCorp se une al cambio</h3>
//                 <p className="card-text text-muted">La empresa TechCorp ha donado 25 monitores
//                     profesionales.</p>
//                 {/* <a href="#" className="btn btn-outline-success btn-sm mt-3">
//                     Ver disponibilidad <i className="bi bi-arrow-right"></i>
//                 </a> */}
//             </div>
//         </div>
//     </>
// }

import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export default function UltimaDonacion() {
    const [ultimaDonacion, setUltimaDonacion] = useState(null);

    useEffect(() => {
        const fetchDonacion = async () => {
            try {
                // Pedimos a Java la última donación de una empresa
                const data = await api.get('/donaciones/ultima');
                setUltimaDonacion(data);
            } catch (error) {
                // Respaldo visual mientras conectas
                setUltimaDonacion({
                    donante: "TechCorp",
                    cantidad: 25,
                    categoria: "monitores"
                });
            }
        };
        fetchDonacion();
    }, []);

    if (!ultimaDonacion) return null;

    return (
        <div className="card h-100 border-success bg-white text-dark">
            <div className="card-body text-center">
                <div className="mb-2">
                    <span className="badge bg-success px-3 py-2">Última donación</span>
                </div>
                <h5 className="card-title text-success mt-4">
                    ¡{ultimaDonacion.donante} se une al cambio!
                </h5>
                <p className="card-text text-muted">
                    Acaban de donar <strong>{ultimaDonacion.cantidad} {ultimaDonacion.categoria}</strong> para darles una segunda vida.
                </p>
            </div>
        </div>
    );
}