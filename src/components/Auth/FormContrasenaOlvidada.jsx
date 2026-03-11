import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

export default function FormContrasenaOlvidada() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [resendStatus, setResendStatus] = useState('');

    const handleSubmit = (e) => {
        setSuccess(true);
    };

    const handleResend = () => {
        setResendStatus('¡Nuevo correo enviado! Por favor, espera unos minutos.');
        setTimeout(() => setResendStatus(''), 5000);
    };

    if (success) {
        return (
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in text-center">
                <div className="icon-success-envelope">
                    <i className="bi bi-envelope-paper-heart"></i>
                </div>
                <h3 className="titulo-secundario text-primary mb-3">Revisa tu bandeja de entrada</h3>
                <p className="text-muted mb-4">
                    Hemos enviado un enlace de recuperación a <strong>{email}</strong>.
                </p>
                <div className="info-box-action">
                    <button onClick={handleResend} type="button" className="btn btn-link text-secondary fw-bold text-decoration-none p-0">
                        Vuelve a mandar el correo
                    </button>
                    {resendStatus && <div className="text-success small fw-bold mt-2">{resendStatus}</div>}
                </div>
                <Link to="/login" className="btn btn-outline-primary px-4 rounded-pill mt-4">
                    Volver al inicio de sesión
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm animate-fade-in">
            <h2 className="titulo">¿Olvidaste tu contraseña?</h2>
            <p className="text-muted text-center mb-3">
                ¡No te preocupes! Introduce el correo electrónico asociado a tu cuenta.
            </p>

            <CustomForm onSubmit={handleSubmit}>
                <CustomInput
                    id="emailRecuperar"
                    label="Correo Electrónico :"
                    type="email"
                    placeholder="tu@correo.com"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage="Por favor, introduce un correo electrónico válido."
                />

                <div className="text-center mt-4">
                    <CustomButton type="submit" onClick={() => navigate('/login')}>
                        Enviar
                    </CustomButton>

                    <p className="text-muted small">
                        ¿Te has acordado? <Link to="/login" className="text-link fw-bold">Inicia sesión aquí</Link>
                    </p>
                </div>
            </CustomForm>
        </div>
    );
}