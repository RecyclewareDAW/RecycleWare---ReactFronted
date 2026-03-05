import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FormRecuperar() {
    // Estados para los campos de texto
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    // Estados para controlar si se ve u oculta la contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Estados para errores y éxito
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validación: Mínimo 9 caracteres y al menos 1 dígito o símbolo
        const isValid = /^(?=.*[\d\W]).{9,}$/.test(password);

        if (!isValid) {
            setError('La contraseña debe tener al menos 9 caracteres y contener un número o carácter especial.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden. Por favor, revísalas.');
            return;
        }

        setSuccess(true);
        
        setTimeout(() => {
            navigate('/login');
        }, 2000);
    };

    if (success) {
        return (
            <div className="alert alert-success text-center animate-fade-in border-0 shadow-sm p-4 rounded-4">
                <i className="bi bi-check-circle-fill fs-1 text-success mb-3 d-block"></i>
                <h4 className="fw-bold">¡Contraseña actualizada!</h4>
                <p className="mb-0">Tu contraseña se ha cambiado correctamente. Redirigiendo al inicio de sesión...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in">
            <h2 className="titulo text-center mb-5">Introduce tu contraseña</h2>
            
            {error && (
                <div className="alert alert-danger py-2 fs-6 d-flex align-items-center mb-4">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4 position-relative">
                    <label className="form-label text-muted">Nueva contraseña :</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="form-control inputs w-100 pe-5" 
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* Botón del Ojo para que el usuario pueda ver su contraseña */}
                    <button 
                        type="button"
                        className="btn btn-link position-absolute bottom-0 end-0 text-muted text-decoration-none border-0 bg-transparent mb-1 px-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                </div>
                
                {/* Segundo campo igual que el primero */}
                <div className="mb-5 position-relative">
                    <label className="form-label text-muted">Repite la contraseña :</label>
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        className="form-control inputs w-100 pe-5" 
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button 
                        type="button"
                        className="btn btn-link position-absolute bottom-0 end-0 text-muted text-decoration-none border-0 bg-transparent mb-1 px-2"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                </div>

                <div className="text-center mt-2">
                    <button type="submit" className="btn btn-primary mb-3 px-4 py-2">
                        Guardar Contraseña
                    </button>
                    <p className="text-muted small mb-0">Una vez guardada se te redirigirá al inicio de sesión</p>
                </div>
            </form>
        </div>
    );
}