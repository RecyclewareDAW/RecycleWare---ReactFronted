import { useState, useEffect, useRef } from 'react';
import { api } from '../../../services/api';

export default function UltimoLogro() {
    const [totalEntregados, setTotalEntregados] = useState(0);
    const [contadorAnimado, setContadorAnimado] = useState(0);
    const [cargando, setCargando] = useState(true);

   
    const elementoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchLogro = async () => {
            try {
                const data = await api.get('/solicitudes/entregadas/count');
                setTotalEntregados(data.total || 0);
            } catch (error) {
                
                setTotalEntregados(0); 
            } finally {
                
                setCargando(false);
            }
        };
        fetchLogro();
    }, []);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            {threshold: 0.5} 
        );
        
        if (elementoRef.current) {
            observer.observe(elementoRef.current);
        }
        return () => {
            if(elementoRef.current) observer.disconnect();
        };
    }, []);

   
    useEffect(() => {
       
        if (totalEntregados === 0 || !isVisible) {
            setContadorAnimado(0);
            return;
        }

        let inicio = 0;
        const duracionAnimacion = 1000;
        const fps = 16; 
        
       
        const incremento = totalEntregados / (duracionAnimacion / fps);

        const temporizador = setInterval(() => {
            inicio += incremento;
            
           
            if (inicio >= totalEntregados) {
                setContadorAnimado(totalEntregados);
                clearInterval(temporizador);
            } else {
               
                setContadorAnimado(Math.floor(inicio));
            }
        }, fps);

        return () => clearInterval(temporizador);
    }, [totalEntregados, isVisible]); 

    return (
        <div ref={elementoRef} className="card h-100 border-primary bg-white text-dark">
            {cargando ? (
                
                <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : (
                
                <div className="card-body text-center d-flex flex-column justify-content-center">
                    <div className="mb-2">
                        <span className="badge bg-primary px-3 py-2">Nuestro Impacto</span>
                    </div>
                    
                    <h3 className="display-3 fw-bold text-primary my-3">
                        {contadorAnimado.toLocaleString('es-ES')}
                    </h3>
                    
                    <h5 className="card-title text-dark">¡Equipos Entregados!</h5>
                    
                    <p className="card-text text-muted mt-2">
                        Gracias a vuestras donaciones, seguimos reduciendo la brecha digital y cuidando el planeta.
                    </p>
                </div>
            )}
        </div>
    );
}