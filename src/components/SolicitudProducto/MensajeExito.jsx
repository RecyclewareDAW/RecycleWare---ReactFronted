import { Link } from 'react-router-dom';

export default function MensajeExito({ producto }) {
    return (
        <div className="alert alert-success text-center my-4 py-5 rounded-4 shadow-sm border-0">
            <h4 className="alert-heading text-success mb-3">
                <i className="bi bi-check-circle-fill me-2 fs-1"></i><br/>
                ¡Solicitud Registrada!
            </h4>
            <p className="text-dark mb-4">
                Hemos recibido tu petición para el <strong>{producto.titulo}</strong>. Nuestro equipo evaluará tu solicitud y te contactaremos por email en las próximas 48 horas con los pasos a seguir.
            </p>
            <Link to="/" className="btn btn-success px-4 py-2">
                Volver al inicio
            </Link>
        </div>
    );
}