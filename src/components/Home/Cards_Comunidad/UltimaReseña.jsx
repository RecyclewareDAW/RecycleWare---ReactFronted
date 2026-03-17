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
                // Aquí llamaremos al backend cuando el endpoint esté listo
                const data = await api.get('/comunidad/resenas');
                setResenas(data);
            } catch (error) {
                // DATOS DE RESPALDO (Mientras haces el backend, verás esto funcionando)
                setResenas([
                    { texto: "Gracias a RecycleWare pude conseguir un portátil para terminar mi curso de programación. Funciona genial.", autor: "Juan R.", rol: "Beneficiario", estrellas: 5 },
                    { texto: "Renovamos la oficina y donar los equipos antiguos fue un proceso rápido, transparente y muy gratificante.", autor: "TechCorp", rol: "Empresa", estrellas: 5 },
                    { texto: "Una iniciativa increíble para reducir la brecha digital y cuidar el medio ambiente al mismo tiempo.", autor: "María L.", rol: "Colaboradora", estrellas: 4 }
                ]);
            }
        };
        fetchResenas();
    }, []);

    // El temporizador para rotar cada 5 segundos
    useEffect(() => {
        // Si no hay reseñas o solo hay 1, no hace falta rotar
        if (resenas.length <= 1) return;

        const intervalo = setInterval(() => {
            setFade(false); // Empezamos a ocultar el texto

            setTimeout(() => {
                // Cambiamos a la siguiente reseña (y si llega al final, vuelve a la 0)
                setIndiceActual((prev) => (prev + 1) % resenas.length);
                setFade(true); // Volvemos a mostrar el texto
            }, 500); // Tarda medio segundo en hacer el cambio invisible

        }, 5000);

        // Limpiamos el intervalo al desmontar para no consumir memoria
        return () => clearInterval(intervalo);
    }, [resenas.length]);


    // Si aún está cargando o no hay reseñas, no mostramos nada
    if (resenas.length === 0) return null;

    const resena = resenas[indiceActual];

    return (
        <div className="card h-100 border-warning bg-white text-dark ">
            <div className="card-body text-center">

                {/* Estrellas dinámicas */}
                <div className="mb-3 text-warning">
                    {[...Array(resena.estrellas)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                    ))}
                </div>

                {/* Contenedor con transición de opacidad */}
                <div style={{ transition: 'opacity 0.5s ease-in-out', opacity: fade ? 1 : 0 }}>
                    <p className="card-text fs-5"><em>"{resena.texto}"</em></p>
                    <p className="fw-bold mb-0">
                        - {resena.autor} <span className="text-muted fw-normal">({resena.rol})</span>
                    </p>
                </div>

            </div>
        </div>
    );
}