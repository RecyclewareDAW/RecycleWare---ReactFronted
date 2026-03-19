import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export default function ButtonLogout({ className, children, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            
            await api.post('/auth/logout');
        } catch (error) {
            console.error("Error al cerrar sesión en el servidor:", error);
        } finally {
        
            localStorage.removeItem('usuarioRecycleware'); 
            
            if (onLogout) {
                onLogout(); 
            }
            
            
            navigate('/');
            
        }
    };

    return (
        <button className={className} onClick={handleLogout} type="button">
            {children}
        </button>
    );
}