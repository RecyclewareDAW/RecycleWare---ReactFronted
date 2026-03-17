import { useState, useEffect } from 'react';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import { api } from '../../services/api';

export default function TabPerfil({ userRole, setActiveTab }) {
    // 1. Extraemos el ID del usuario de la sesión actual
    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');
    const userId = userSession.id;

    // ESTADOS PARA PARTICULARES
    const [nombre, setNombre] = useState(userRole === 'individual' ? (userSession.nombre || '') : '');
    const [dni, setDni] = useState(userRole === 'individual' ? (userSession.dni || '') : '');
    const [telefonoIndividual, setTelefonoIndividual] = useState(userRole === 'individual' ? (userSession.telefono || '') : '');
    const [correoIndividual, setCorreoIndividual] = useState(userRole === 'individual' ? (userSession.correo || '') : '');

    // ESTADOS PARA EMPRESAS
    const [razonSocial, setRazonSocial] = useState(userRole === 'empresa' ? (userSession.razonSocial || '') : '');
    const [nombreComercial, setNombreComercial] = useState(userRole === 'empresa' ? (userSession.nombre || '') : ''); 
    const [cif, setCif] = useState(userRole === 'empresa' ? (userSession.dni || '') : '');
    const [personaContacto, setPersonaContacto] = useState(userRole === 'empresa' ? (userSession.nombreContacto || '') : '');
    const [correoEmpresa, setCorreoEmpresa] = useState(userRole === 'empresa' ? (userSession.correo || '') : '');
    const [telefonoPrincipal, setTelefonoPrincipal] = useState(userRole === 'empresa' ? (userSession.telefono || '') : '');

    const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
    const [ultimasDonaciones, setUltimasDonaciones] = useState([]);
    const [cargandoDonaciones, setCargandoDonaciones] = useState(true);

    useEffect(() => {
        // Solo hacemos la petición si es empresa y tenemos el ID del usuario
        if (userRole === 'empresa' && userId) {
            fetch(`http://localhost:8080/api/donations/user/${userId}`)
                .then(res => res.json())
                .then(data => {
                    // ORDENACIÓN POR FECHA (MÁS PRECISO)
                    // Comparamos los objetos de fecha creados a partir de tu campo 'fecha_donacion'
                    const ultimas = data.sort((a, b) => {
                        return new Date(b.fechaDonacion) - new Date(a.fechaDonacion);
                    }).slice(0, 2);

                    setUltimasDonaciones(ultimas);
                    setCargandoDonaciones(false);
                })
                .catch(err => {
                    console.error("Error cargando donaciones:", err);
                    setCargandoDonaciones(false);
                });
        } else {
            setCargandoDonaciones(false);
        }
    }, [userRole, userId]);

    const handleGuardarPerfil = async () => {
        setMensaje({ tipo: '', texto: '' });

        const datosActualizados = {
            ...userSession, 
            // "nombre" (o nombre comercial si es empresa)
            nombre: userRole === 'individual' ? nombre : nombreComercial,
            dni: userRole === 'individual' ? dni : cif,
            telefono: userRole === 'individual' ? telefonoIndividual : telefonoPrincipal,
            correo: userRole === 'individual' ? correoIndividual : correoEmpresa,
            razonSocial: userRole === 'empresa' ? razonSocial : null,
            nombreContacto: userRole === 'empresa' ? personaContacto : null
        };
        try {
            await api.put('/users', datosActualizados);
            localStorage.setItem('usuarioRecycleware', JSON.stringify(datosActualizados));
            setMensaje({ tipo: 'success', texto: '¡Tus datos se han actualizado correctamente!' });
            
            // Actualizamos la sesión para que el "Hola, Usuario" del Header se entere
            window.dispatchEvent(new Event("storage")); 
        } catch (error) {
            setMensaje({ tipo: 'danger', texto: error.message || 'Error al guardar los cambios.' });
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo">
                {userRole === 'individual' ? 'Datos Personales' : 'Datos de la Empresa'}
            </h2>

            {mensaje.texto && (
                <div className={`alert alert-${mensaje.tipo} fw-bold`}>
                    {mensaje.tipo === 'success' ? <i className="bi bi-check-circle-fill me-2"></i> : <i className="bi bi-exclamation-triangle-fill me-2"></i>}
                    {mensaje.texto}
                </div>
            )}

            <CustomForm onSubmit={handleGuardarPerfil}>
                {userRole === 'individual' ? (
                    <>
                        <div className="row">
                            <div className="col-12">
                                <CustomInput id="nombre" label="Nombre Completo" type="text" placeholder="Tu nombre completo" required={true} value={nombre} onChange={(e) => { setNombre(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput id="dni" label="DNI / NIE" type="text" placeholder="Ej: 12345678A" required={true} rule="dni" value={dni} disabled={true} onChange={(e) => { setDni(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                            <div className="col-md-6">
                                <CustomInput id="telefonoIndividual" label="Teléfono de contacto" type="tel" placeholder="Tu número de teléfono" required={true} rule="telefono" value={telefonoIndividual} onChange={(e) => { setTelefonoIndividual(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <CustomInput id="correoIndividual" label="Correo Electrónico" type="text" inputMode="email" placeholder="tucorreo@ejemplo.com" required={true} rule="email" value={correoIndividual} onChange={(e) => { setCorreoIndividual(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput id="razonSocial" label="Razón Social" type="text" placeholder="Nombre legal de la empresa" required={true} value={razonSocial} onChange={(e) => { setRazonSocial(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                            <div className="col-md-6">
                                <CustomInput id="nombreComercial" label="Nombre Comercial" type="text" placeholder="¿Cómo se conoce tu empresa?" required={true} value={nombreComercial} onChange={(e) => { setNombreComercial(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput id="cif" label="CIF" type="text" placeholder="B12345678" required={true} rule="cif" value={cif} disabled={true} onChange={(e) => { setCif(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                            <div className="col-md-6">
                                <CustomInput id="personaContacto" label="Persona de contacto" type="text" placeholder="Nombre de la persona encargada" required={true} value={personaContacto} onChange={(e) => { setPersonaContacto(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput id="correoEmpresa" label="Correo Electrónico" type="text" inputMode="email" placeholder="correo@empresa.com" required={true} rule="email" value={correoEmpresa} onChange={(e) => { setCorreoEmpresa(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                            <div className="col-md-6">
                                <CustomInput id="telefonoPrincipal" label="Teléfono principal" type="tel" placeholder="Teléfono principal" required={true} rule="telefono" value={telefonoPrincipal} onChange={(e) => { setTelefonoPrincipal(e.target.value); setMensaje({tipo:'', texto:''}); }} />
                            </div>
                        </div>
                    </>
                )}

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        Guardar Cambios
                    </button>
                </div>
            </CustomForm>

            {/* SECCIÓN: RESUMEN DE DONACIONES REALES */}
            {userRole === 'empresa' && (
                <div className="mt-5 pt-2 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                        <h3 className="mb-0 fw-bold text-primary fs-4">Últimas Donaciones</h3>
                        <button
                            type="button"
                            className="btn btn-sm btn-link text-danger text-decoration-none fw-bold p-0"
                            onClick={() => setActiveTab('donaciones')}
                        >
                            Ver todas <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>

                    <div className="d-flex flex-column gap-3">
                        {cargandoDonaciones ? (
                            <div className="text-center p-3">
                                <div className="spinner-border spinner-border-sm text-primary"></div>
                            </div>
                        ) : ultimasDonaciones.length > 0 ? (
                            ultimasDonaciones.map((d) => (
                                <div key={d.id} className="p-3 rounded-3 d-flex justify-content-between align-items-center shadow-sm bg-white border">
                                    <div>
                                        <h6 className="text-primary">{d.descripcion}</h6>
                                        <small className="text-muted d-block">
                                            <i className="bi bi-calendar3 me-2"></i>
                                            {d.fechaDonacion ? new Date(d.fechaDonacion).toLocaleDateString() : `Referencia: #${d.id}`}
                                        </small>
                                    </div>
                                    <span className={`badge rounded-pill px-3 py-1 ${d.estado?.id === 1
                                            ? 'bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25'
                                            : d.estado?.id === 2
                                                ? 'bg-info bg-opacity-10 text-info border border-info border-opacity-25'
                                                : 'bg-success bg-opacity-10 text-success border border-success border-opacity-25'
                                        }`}>
                                        {d.estado?.nombre || 'Pendiente'}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center p-4 bg-light rounded-4">
                                <p className="text-muted mb-0">Aún no has realizado ninguna donación.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}