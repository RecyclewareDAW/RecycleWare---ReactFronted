import { Link } from 'react-router-dom';

export default function FormularioSolicitud({ producto, handleSubmit, validated }) {
    return (
        <div className="col-lg-7">
            <form 
                noValidate 
                onSubmit={handleSubmit} 
                className={`needs-validation ${validated ? 'was-validated' : ''}`}
            >
                <div className="mb-4">
                    <label htmlFor="motivo" className="form-label d-none">
                        Motivo de la solicitud
                    </label>
                    <textarea 
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs" 
                        id="motivo" 
                        rows="3" 
                        placeholder="¿Para qué necesitas este equipo? (Estudios, búsqueda de empleo...)" 
                        required
                    ></textarea>
                    <div className="invalid-feedback">
                        Por favor, cuéntanos brevemente para qué lo necesitas.
                    </div>
                </div>

                <div className="mb-4 p-3 border-start border-4 border-secondary bg-light rounded-end">
                    <p className="text-muted small mb-1 fw-bold text-uppercase" style={{ letterSpacing: '0.5px' }}>
                        Punto de recogida asignado
                    </p>
                    <div className="d-flex align-items-center text-primary fs-5 mb-2">
                        <i className="bi bi-geo-alt-fill me-2 text-secondary"></i>
                        <span className="fw-semibold">{producto.centroRecogida}</span>
                    </div>
                    <p className="text-muted small mb-0">
                        <i className="bi bi-info-circle me-1"></i>
                        Este equipo se encuentra físicamente en estas instalaciones y deberá ser recogido allí una vez aprobada la solicitud.
                    </p>
                </div>

                <div className="form-check mb-5 mt-4">
                    <input className="form-check-input terminos" type="checkbox" id="compromiso" required />
                    <label className="form-check-label text-muted small" htmlFor="compromiso">
                        Me comprometo a darle un buen uso a este equipo y acepto los <a href="#" className="text-link">términos y condiciones</a>.
                    </label>
                    <div className="invalid-feedback">
                        Debes aceptar el compromiso de buen uso.
                    </div>
                </div>

                <div className="d-flex gap-3">
                    <Link to="/#categorias" className="btn btn-outline-secondary px-4 py-2">
                        Volver
                    </Link>
                    <button type="submit" className="btn btn-primary text-white px-4 py-2 flex-grow-1">
                        Confirmar Solicitud
                    </button>
                </div>
            </form>
        </div>
    );
}