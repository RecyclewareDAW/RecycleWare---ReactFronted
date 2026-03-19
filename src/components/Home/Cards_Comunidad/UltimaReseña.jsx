import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

export default function UltimaReseña() {
    const [resenas, setResenas] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [fade, setFade] = useState(true); //para el efecto de transición

    // Cargar datos de la base de datos al montar el componente
    useEffect(() => {
        const fetchResenas = async () => {
            try {
                const data = await api.get('/comunidad/resenas');
                if (data && data.length > 0) {
                    setResenas(data);
                }
            } catch (error) {
                console.error("Error al cargar las reseñas de la base de datos:", error);
            }
        };
        fetchResenas();
    }, []);

    useEffect(() => {

        if (resenas.length <= 1) return;

        const intervalo = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndiceActual((prev) => (prev + 1) % resenas.length);
                setFade(true);
            }, 500);

        }, 5000);


        return () => clearInterval(intervalo);
    }, [resenas.length]);

    if (resenas.length === 0) {
        return (
            <div className="card h-100 border-warning bg-white text-dark">
                <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        );
    };

    const resena = resenas[indiceActual];

    const formatearRol = (rol) => {
        if (rol === 'EMPRESA') return 'Empresa Donante';
        if (rol === 'PARTICULAR') return 'Beneficiario';
        return rol;
    };

    return (
        <div className="card h-100 border-warning bg-white text-dark ">
            <div className="card-body text-center">

                <div className="mb-3 text-warning">
                    {[...Array(resena.estrellas || 5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                    ))}
                </div>

                <div className={`resena-fade-container ${fade ? 'fade-in' : 'fade-out'}`}>
                    <p className="card-text fs-5"><em>"{resena.texto}"</em></p>
                    <p className="fw-bold mb-0">
                        - {resena.autor} <span className="text-muted fw-normal">({formatearRol(resena.rol)})</span>
                    </p>
                </div>

            </div>
        </div>
    );
}