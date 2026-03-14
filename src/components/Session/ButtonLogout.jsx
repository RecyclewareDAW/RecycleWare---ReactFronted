import { useNavigate } from 'react-router-dom';

export default function ButtonLogout({ className, children, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('usuarioRecycleware'); // Borramos la sesión
        if (onLogout) {
            onLogout(); 
        }
        navigate('/'); // Redirigimos al inicio
    };

    return (
        <button className={className} onClick={handleLogout}>
            {children}
        </button>
    );
}