import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormCard from '../FormCard';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const RegisteredDonation = () => {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);
    const [userId, setUserId] = useState(null);
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    const [descripcion, setDescripcion] = useState('');
    const [cantidadProductos, setCantidadProductos] = useState(1);
    const [peso, setPeso] = useState('');
    const [confirmacion, setConfirmacion] = useState(false);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioRecycleware');
        if (usuarioGuardado) {
            const user = JSON.parse(usuarioGuardado || '{}');
            setUserId(user.id);
            const rol = (user.rol || user.role || 'individual').toLowerCase();
            setUserRole(rol);
        } else {
            setUserRole('anonimo');
        }
    }, []);

    const handleSubmit = async () => {
        if (!userId) {
            setError(true);
            return;
        }

        setCargando(true);
        setError(false);

        const nuevaDonacion = {
            donante: { id: userId },
            estado: { id: 1 },
            descripcion: descripcion,
            cantidadProductos: parseInt(cantidadProductos),
            peso: peso ? parseFloat(peso) : null
        };

        try {
            const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
            const response = await fetch(`${baseUrl}/donaciones`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // IMPORTANTE: Esto permite que el navegador envíe la cookie de sesión (JSESSIONID)
                // Si no pones esto, Spring Security te dará error 401/403 aunque estés logueado.
                credentials: 'include',
                body: JSON.stringify(nuevaDonacion)
            });

            if (response.ok) {
                setEnviado(true);
            } else {
                // Si el servidor responde con error (400, 401, 500...)
                const errorData = await response.json().catch(() => ({}));
                console.error("Error del servidor:", errorData);
                setError(true);
            }
        } catch (err) {
            console.error("Error de red o conexión:", err);
            setError(true);
        } finally {
            setCargando(false);
        }
    };
    if (userRole === null) return null;

    // --- VISTA PARTICULAR ---
    if (userRole === 'individual' || userRole === 'particular') {
        return (
            <FormCard
                title="¿Cómo donar tu equipo?"
                subtitle="Para colaborar con nosotros, puedes entregar los productos directamente en nuestra sede sin cita previa."
                colSize="col-lg-10"
            >
                <div className="animate-fade-in">

                    <div className="row g-4 mt-2">

                        {/* Tarjeta de Dirección */}
                        <div className="col-md-6">
                            <div className="h-100 p-4 bg-light border-0 rounded-4 shadow-sm text-center">
                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm icon-circle">
                                    <i className="bi bi-geo-alt-fill text-warning fs-4"></i>
                                </div>
                                <h3 className="h6 fw-bold text-uppercase text-info mb-3">Punto de Entrega</h3>
                                <p className="mb-1 text-dark">IES Doctor Balmis</p>
                                <p className="text-muted small mb-0">Calle Cerámica 24, Alicante (España)</p>
                            </div>
                        </div>

                        {/* Tarjeta de Horarios */}
                        <div className="col-md-6">
                            <div className="h-100 p-4 bg-light border-0 rounded-4 shadow-sm text-center">
                                <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 shadow-sm icon-circle">
                                    <i className="bi bi-clock-fill text-warning fs-4"></i>
                                </div>
                                <h3 className="h6 fw-bold text-uppercase text-info mb-3">Horario</h3>
                                <p className="mb-1 text-dark">Lunes a Viernes</p>
                                <p className="text-muted small mb-0">09:00h - 14:00h</p>
                            </div>
                        </div>

                        {/* Banner Informativo Inferior */}
                        <div className="col-12">
                            <div className="p-3 rounded-4 border-start border-4 border-success bg-success bg-opacity-10 d-flex align-items-center">
                                <i className="bi bi-info-circle-fill text-success fs-4 me-3"></i>
                                <p className="small mb-0 text-dark">
                                    <strong>Nota:</strong> No es necesario realizar un registro previo de los productos. Nuestro equipo los catalogará en el momento de la entrega.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón de acción final fuera de las columnas */}
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => navigate('/')}
                        >
                            <i className="bi bi-house-door me-2"></i>
                            Volver al Inicio
                        </button>
                    </div>
                </div>
            </FormCard>
        );
    }

    // --- ESTADO ÉXITO / ERROR ---
    if (enviado) {
        return (
            <div className="alert alert-success text-center my-4 py-5 rounded-4 shadow-sm border-0 animate-fade-in w-100">
                <h4 className="alert-heading text-success mb-3">
                    <i className="bi bi-check-circle-fill me-2 fs-1"></i><br />
                    ¡Solicitud Registrada!
                </h4>
                <p className="text-dark mb-4">
                    Hemos recibido vuestra petición. Nuestro equipo de logística contactará con la empresa en las próximas 48 horas para coordinar la recogida.
                </p>
                <Link to="/" className="btn btn-success px-4 py-2">Volver al inicio</Link>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger text-center my-4 py-5 rounded-4 shadow-sm border-0 animate-fade-in w-100">
                <i className="bi bi-exclamation-triangle-fill text-danger fs-1 mb-3"></i>
                <h4 className="text-danger mb-3">Error en la solicitud</h4>
                <p className="text-dark mb-4">Inténtelo de nuevo en unos minutos.</p>
                <button onClick={() => setError(false)} className="btn btn-danger px-4 py-2">Reintentar</button>
            </div>
        );
    }

    // --- FORMULARIO EMPRESA (TAMAÑO ORIGINAL) ---
    return (
        <FormCard title="Donar Productos" colSize="col-lg-12">
            <div className="animate-fade-in">
                {/* BLOQUE PASOS 1-2-3 */}
                <div className="row g-0 mb-5 text-center bg-light py-4 rounded-4 border mx-0 shadow-sm">
                    <div className="col-4 border-end">
                        <i className="bi bi-1-circle text-warning fs-3"></i>
                        <h6 className="fw-bold mt-2 text-primary">Registro</h6>
                        <p className="small text-muted mb-0">Qué se dona</p>
                    </div>
                    <div className="col-4 border-end">
                        <i className="bi bi-2-circle text-warning fs-3"></i>
                        <h6 className="fw-bold mt-2 text-primary">Logística</h6>
                        <p className="small text-muted mb-0">Cálculo transporte</p>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-truck text-warning fs-3"></i>
                        <h6 className="fw-bold mt-2 text-primary">Recogida</h6>
                        <p className="small text-muted mb-0">En vuestra sede</p>
                    </div>
                </div>

                <CustomForm onSubmit={handleSubmit}>
                    {/* Fila 1: Descripción completa */}
                    <div className="mb-4">
                        <CustomInput
                            id="descripcion"
                            label={<span className="fw-bold">Descripción de los productos que se donan</span>}
                            type="textarea"
                            placeholder="Indica qué equipos donas, su estado, información relevante..."
                            rows="3"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>

                    {/* Fila 2: Cantidad y Peso*/}
                    <div className="row">
                        <div className="col-md-6">
                            <CustomInput
                                id="cantidadProductos"
                                label="Cantidad"
                                type="number"
                                value={cantidadProductos}
                                onChange={(e) => setCantidadProductos(e.target.value)}
                                required
                                min="1"
                            />
                        </div>
                        <div className="col-md-6">
                            <CustomInput
                                id="peso"
                                label="Peso kg (Opcional)"
                                type="number"
                                placeholder="Ej: 15"
                                value={peso}
                                onChange={(e) => setPeso(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <CustomInput
                            id="confirmacion"
                            type="checkbox"
                            label="Confirmo que el material está listo para la retirada en nuestras instalaciones."
                            required
                            value={confirmacion}
                            onChange={(e) => setConfirmacion(e.target.checked)}
                        />
                    </div>

                    <div className="text-end border-top pt-4">
                        <CustomButton type="submit" disabled={cargando}>
                            {cargando ? "Solicitando..." : "Solicitar Recogida"}
                        </CustomButton>
                        <p className="text-muted small mt-3 italic text-center">
                            * Un técnico contactará en 24/48h para coordinar la recogida.
                        </p>
                    </div>
                </CustomForm>
            </div>
        </FormCard>
    );
};

export default RegisteredDonation;