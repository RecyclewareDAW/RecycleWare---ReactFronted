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
            const user = JSON.parse(usuarioGuardado);
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

        // ESTRUCTURA EXACTA PARA TU CLASE JAVA
        const nuevaDonacion = {
            // En Java tienes "private User donante", espera un objeto con su id
            donante: {
                id: userId
            },
            // En Java tienes "private DonationState estado" y es NOT NULL
            // Enviamos el ID 1 (que suele ser 'Pendiente')
            estado: {
                id: 1
            },
            descripcion: descripcion,
            cantidadProductos: parseInt(cantidadProductos),
            peso: peso ? parseFloat(peso) : null
        };

        try {
            const response = await fetch('http://localhost:8080/api/donations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevaDonacion)
            });

            if (response.ok) {
                setEnviado(true);
            } else {
                // Esto nos dirá en la consola del navegador si sigue habiendo problemas
                const errorText = await response.text();
                console.error("Error del servidor:", errorText);
                setError(true);
            }
        } catch (err) {
            console.error("Error de red:", err);
            setError(true);
        } finally {
            setCargando(false);
        }
    };
    if (userRole === null) return null;

    // --- VISTA PARTICULAR ---
    if (userRole === 'individual' || userRole === 'particular') {
        return (
            <FormCard title="¿Cómo donar tu equipo?" colSize="col-lg-12">
                <div className="text-center p-4 animate-fade-in">
                    <div className="bg-primary bg-opacity-10 p-4 rounded-circle d-inline-block mb-4">
                        <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                    </div>
                    <h2 className="titulo mb-3">Punto de Entrega</h2>
                    <div className="bg-light p-4 rounded-4 mb-4 border mx-2">
                        <p className="mb-1 fw-bold fs-5 text-dark">Calle de la Tecnología, 42, Alicante</p>
                        <p className="mb-0 text-muted">Lunes a Viernes: 09:00 - 18:00</p>
                    </div>
                    <CustomButton onClick={() => navigate('/')}>Volver al Inicio</CustomButton>
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
                        <i className="bi bi-1-circle text-primary fs-3"></i>
                        <h6 className="fw-bold mt-2">Registro</h6>
                        <p className="small text-muted mb-0">Qué se dona</p>
                    </div>
                    <div className="col-4 border-end">
                        <i className="bi bi-2-circle text-primary fs-3"></i>
                        <h6 className="fw-bold mt-2">Logística</h6>
                        <p className="small text-muted mb-0">Cálculo transporte</p>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-truck text-primary fs-3"></i>
                        <h6 className="fw-bold mt-2">Recogida</h6>
                        <p className="small text-muted mb-0">En vuestra sede</p>
                    </div>
                </div>

                <CustomForm onSubmit={handleSubmit}>
                    {/* Fila 1: Descripción completa */}
                    <div className="mb-4">
                        <CustomInput
                            id="descripcion"
                            label="Descripción de los productos que se donan"
                            type="textarea"
                            placeholder="Indica qué equipos donas y su estado..."
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