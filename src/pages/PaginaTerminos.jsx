import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PaginaTerminosV2() {
    return (
        <div>
            <Header />
            <main className="container py-5 flex-fill">
                <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm mx-auto col-lg-10">
                    
                    <h1 className="titulo mb-2">Términos y Condiciones de Uso</h1>
                    <p className="text-muted small text-center mb-4">Última actualización: 6 de marzo de 2026</p>
                    
                    <div className="alert alert-info bg-opacity-10 border-0 rounded-3 p-3 mb-5">
                        <p className="small mb-0 text-primary">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Al utilizar la plataforma <strong>RecycleWare</strong>, usted acepta quedar vinculado por los siguientes términos. Por favor, léalos detenidamente antes de completar su registro.
                        </p>
                    </div>

                    <div className="cuerpo-legal">
                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">1. Objeto de la Plataforma</h4>
                            <p className="text-muted">
                                RecycleWare proporciona un entorno digital para la gestión, donación y reciclaje responsable de residuos electrónicos y tecnológicos. Nuestra misión es facilitar la economía circular conectando a usuarios, empresas y centros de reciclaje autorizados.
                            </p>
                        </section>

                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">2. Registro y Responsabilidad de la Cuenta</h4>
                            <p className="text-muted">
                                El usuario se compromete a proporcionar información veraz y actualizada durante el proceso de registro. Es responsabilidad del usuario mantener la confidencialidad de sus credenciales de acceso. RecycleWare se reserva el derecho de suspender cuentas que proporcionen datos falsos o realicen un uso fraudulento del sistema de puntos.
                            </p>
                        </section>

                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">3. Gestión de Residuos y Donaciones</h4>
                            <ul className="text-muted list-unstyled ps-3">
                                <li className="mb-2"><i className="bi bi-check2 text-secondary me-2"></i> Los dispositivos entregados deben estar libres de materiales peligrosos no declarados.</li>
                                <li className="mb-2"><i className="bi bi-check2 text-secondary me-2"></i> El usuario es responsable de borrar cualquier información personal o sensible de los dispositivos antes de la entrega.</li>
                                <li className="mb-2"><i className="bi bi-check2 text-secondary me-2"></i> Una vez entregado el residuo, la propiedad del mismo se transfiere al centro de tratamiento seleccionado.</li>
                            </ul>
                        </section>

                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">4. Propiedad Intelectual</h4>
                            <p className="text-muted">
                                Todos los contenidos, logotipos, diseños y software de la plataforma RecycleWare son propiedad exclusiva de RecycleWare DAW o sus licenciantes y están protegidos por las leyes de propiedad intelectual internacionales.
                            </p>
                        </section>

                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">5. Protección de Datos (RGPD)</h4>
                            <p className="text-muted">
                                En cumplimiento con el Reglamento General de Protección de Datos, le informamos que sus datos personales serán tratados con la finalidad de gestionar su perfil de impacto, coordinar recogidas y, si así lo ha aceptado, enviarle comunicaciones sobre el impacto ambiental de sus donaciones.
                            </p>
                        </section>

                        <section className="mb-5">
                            <h4 className="text-primary fw-semibold h5">6. Limitación de Responsabilidad</h4>
                            <p className="text-muted">
                                RecycleWare no se hace responsable de los daños derivados del mal uso de la plataforma por parte de terceros ni de la pérdida de datos contenidos en dispositivos entregados para reciclaje.
                            </p>
                        </section>
                    </div>

                    <div className="text-center mt-5 pt-4 border-top">
                        <button onClick={() => window.close()} className="btn btn-primary rounded-pill">
                            He leído los términos y deseo volver
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}