import { useNavigate } from "react-router-dom";
import FormCard from "../FormCard";
import CustomButton from "../CustomButton";

const AnonymousDonation = () => {
    const navigate = useNavigate();

    return (
        <FormCard title="¿Cómo quieres colaborar?" colSize="col-lg-12">
            <div className="animate-fade-in">
                <div className="row g-4 mb-5">
                    {/* COLUMNA PARTICULARES */}
                    <div className="col-md-6 border-md-end pe-md-4">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                                <i className="bi bi-person-heart text-primary fs-4"></i>
                            </div>
                            <h4 className="mb-0 fw-bold text-dark">Particulares</h4>
                        </div>
                        <p className="text-muted">
                            No necesitas registro ni cuenta de usuario. Si tienes equipos para donar, solo tienes que traerlos a nuestro punto de recepción oficial.
                        </p>
                        <div className="bg-light p-4 rounded-4 border">
                            <h6 className="fw-bold small text-uppercase text-secondary mb-3">Punto de entrega directa:</h6>
                            <div className="d-flex align-items-start mb-3">
                                <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
                                <div>
                                    <p className="mb-0 fw-bold text-dark">IES Doctor Balmis</p>
                                    <p className="small text-muted mb-0">Calle Cerámica, 24, Alicante 03010</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start">
                                <i className="bi bi-clock-fill text-primary me-3 fs-5"></i>
                                <div>
                                    <p className="mb-0 fw-bold text-dark">Horario de recepción</p>
                                    <p className="small text-muted mb-0">Lunes a Viernes: 09:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA EMPRESAS */}
                    <div className="col-md-6 ps-md-4">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-success bg-opacity-10 p-2 rounded-3 me-3">
                                <i className="bi bi-building-fill text-success fs-4"></i>
                            </div>
                            <h4 className="mb-0 fw-bold text-dark">Empresas e Instituciones</h4>
                        </div>
                        <p className="text-muted">
                            Si sois una empresa con lotes de material, gestionamos la <strong>recogida gratuita</strong> en vuestra sede. Es necesario acceder con vuestra cuenta para solicitar la logística.
                        </p>
                        <div className="bg-white p-3 rounded-4 border mb-4 shadow-sm">
                            <ul className="list-unstyled mb-0 small text-muted">
                                <li className="mb-2"><i className="bi bi-truck text-success me-2"></i>Recogida programada a domicilio.</li>
                                <li className="mb-2"><i className="bi bi-check2-circle text-success me-2"></i>Gestión de residuos responsable.</li>
                                <li><i className="bi bi-bar-chart-line text-success me-2"></i>Métricas de impacto ambiental (CO₂).</li>
                            </ul>
                        </div>
                        <div className="d-grid gap-2">
                            <CustomButton onClick={() => navigate('/login')}>
                                <i className="bi bi-box-arrow-in-right me-2"></i> Acceso Empresas
                            </CustomButton>
                            <button 
                                className="btn btn-link btn-sm text-muted text-decoration-none"
                                onClick={() => navigate('/registro')}
                            >
                                ¿Aún no tenéis cuenta? Registrad la empresa aquí
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center border-top pt-4">
                    <button className="btn btn-outline-secondary px-4 rounded-pill btn-sm" onClick={() => navigate('/')}>
                        Volver al inicio
                    </button>
                </div>
            </div>
        </FormCard>
    );
}

export default AnonymousDonation;