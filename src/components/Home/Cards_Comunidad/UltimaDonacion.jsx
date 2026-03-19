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
            <div className="card-body d-flex flex-column text-center">
                <div className="mb-2">
                    <span className="badge bg-success px-3 py-2">Última donación</span>
                </div>
                <h5 className="card-title text-success mt-2">
                    ¡{ultimaDonacion.donante} se une al cambio!
                </h5>
                
                <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                    <p className="card-text text-muted fs-5">
                        Acaban de donar <strong>{ultimaDonacion.cantidad} unidades</strong> para darles una segunda vida.
                    </p>
                </div>
            </div>
        </div>
    );
}