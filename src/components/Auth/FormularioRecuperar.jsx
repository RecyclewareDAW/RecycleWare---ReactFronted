import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';

export default function FormRecuperar() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [success, setSuccess] = useState(false);
    const [errorMatch, setErrorMatch] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (password !== confirmPassword) {
            setErrorMatch(true);
            return;
        }
        setErrorMatch(false);
        setSuccess(true);
        setTimeout(() => navigate('/login'), 2000);
    };

    if (success) {
        return (
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm text-center animate-fade-in">
                <i className="bi bi-check-circle-fill text-success mb-3 d-block display-4"></i>
                <h3 className="titulo-secundario text-primary">¡Contraseña actualizada!</h3>
                <p className="text-muted">Redirigiendo al inicio de sesión...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in">
            <h2 className="titulo mb-5">Nueva Contraseña</h2>

            <CustomForm onSubmit={handleSubmit}>
                <div className="password-container mb-2">
                    <CustomInput 
                        id="password"
                        label="Nueva contraseña :"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        pattern="^(?=.*[\d\W]).{9,}$"
                        errorMessage="Mínimo 9 caracteres con un número o símbolo."
                    />
                    <button 
                        type="button"
                        className="btn-toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                </div>

                <div className="password-container">
                    <CustomInput 
                        id="confirmPassword"
                        label="Repite la contraseña :"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="********"
                        required={true}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        errorMessage="Por favor, confirma tu contraseña."
                    />
                    <button 
                        type="button"
                        className="btn-toggle-password"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                </div>

                {errorMatch && (
                    <div className="alert alert-danger border-0 py-2 small mb-4 animate-fade-in mt-3">
                        <i className="bi bi-exclamation-circle me-2"></i>
                        Las contraseñas no coinciden.
                    </div>
                )}

                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-primary px-5 py-2 fw-bold rounded-pill">
                        Guardar Contraseña
                    </button>
                    <p className="text-muted small mt-3 mb-0">Se te redirigirá al inicio de sesión automáticamente.</p>
                </div>
            </CustomForm>
        </div>
    );
}