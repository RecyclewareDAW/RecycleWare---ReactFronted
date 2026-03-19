import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export default function ButtonLogout({ className, children, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // 1. Avisamos a Spring Boot para que invalide la sesión (borre la Cookie)
            await api.post('/auth/logout');
        } catch (error) {
            console.error("Error al cerrar sesión en el servidor:", error);
        } finally {
            // 2. Borramos los datos locales pase lo que pase
            localStorage.removeItem('usuarioRecycleware'); 
            
            if (onLogout) {
                onLogout(); 
            }
            
            // 3. Redirigimos al inicio
            navigate('/');
            
            // Opcional: Forzar recarga para limpiar estados residuales de React
            // window.location.reload(); 
        }
    };

    return (
        <button className={className} onClick={handleLogout} type="button">
            {children}
        </button>
    );
}