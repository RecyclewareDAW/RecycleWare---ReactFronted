import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FormContrasenaOlvidada() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [resendStatus, setResendStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email || !email.includes('@')) {
            return; 
        }

        setSuccess(true);
    };

    const handleResend = () => {
        setResendStatus('¡Nuevo correo enviado! Por favor, espera unos minutos.');
        
        setTimeout(() => {
            setResendStatus('');
        }, 5000);
    };

    // --- RENDERIZADO DE ÉXITO  ---
    if (success) {
        return (
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in text-center">
                <div className="icon-success-envelope">
                    <i className="bi bi-envelope-paper-heart"></i>
                </div>

                <h3 className="titulo-secundario text-primary mb-3">Revisa tu bandeja de entrada</h3>
                <p className="text-muted mb-4">
                    Hemos enviado un enlace de recuperación a <strong>{email}</strong>. 
                    Haz clic en él para crear una nueva contraseña.
                </p>
                
                {/* --- SECCIÓN DE REENVÍO --- */}
                <div className="info-box-action">
                    <p className="small mb-2 fw-medium">
                        ¿No lo has recibido o ha caducado el enlace?
                    </p>
                    {/* Botón limpio: el color text-secondary ya es tu teal */}
                    <button 
                        onClick={handleResend}
                        type="button"
                        className="btn btn-link text-secondary fw-bold text-decoration-none p-0"
                    >
                        Vuelve a mandar el correo
                    </button>

                    {resendStatus && (
                        <div className="text-success small fw-bold mt-2 animate-fade-in">
                            <i className="bi bi-check2-circle me-1"></i> {resendStatus}
                        </div>
                    )}
                </div>

                <Link to="/login" className="btn btn-outline-primary px-4 rounded-pill">
                    Volver al inicio de sesión
                </Link>
            </div>
        );
    }

    // --- RENDERIZADO DEL FORMULARIO ---
    return (
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in">
            <h2 className="titulo text-center mb-4">¿Olvidaste tu contraseña?</h2>
            <p className="text-muted text-center mb-5">
                ¡No te preocupes!. Introduce el correo electrónico asociado a tu cuenta y te enviaremos las instrucciones para recuperarla.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="form-label text-muted">Correo Electrónico :</label>
                    <input 
                        type="email" 
                        className="form-control inputs" 
                        placeholder="tu@correo.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100 mb-4 py-2 fw-bold">
                        Enviar enlace de recuperación
                    </button>
                    
                    <p className="text-muted small mb-0">
                        ¿Te has acordado? <Link to="/login" className="text-secondary fw-bold text-decoration-none">Inicia sesión aquí</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}