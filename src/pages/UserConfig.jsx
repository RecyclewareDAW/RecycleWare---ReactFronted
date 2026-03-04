import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

export default function UserConfig() {
    const [activeTab, setActiveTab] = useState('perfil');
    const [userRole, setUserRole] = useState('individual'); // Mock: 'individual' o 'empresa'

    const renderContent = () => {
        switch (activeTab) {
            case 'perfil':
                return (
                    <div className="animate-fade-in">
                        {/* 1. FORMULARIO DE DATOS PERSONALES */}
                        <h2 className="titulo mb-4 border-bottom pb-2">Datos Personales</h2>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control inputs" placeholder="Tu nombre" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" className="form-control inputs" placeholder="Tus apellidos" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control inputs" placeholder="tucorreo@ejemplo.com" />
                            </div>
                            <button className="btn btn-secondary mb-4">Guardar Cambios</button>
                        </form>

                        {/* 2. NUEVA SECCIÓN: RESUMEN DE DONACIONES (SOLO EMPRESAS) */}
                        {userRole === 'empresa' && (
                            <div className="mt-5 pt-2 border-top">
                                <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                                    <h3 className="mb-0 fw-bold text-primary" style={{ fontFamily: 'Alexandria, sans-serif', fontSize: '1.4rem' }}>
                                        Últimas Donaciones
                                    </h3>
                                    {/* Este botón cambia la pestaña activa a 'donaciones' */}
                                    <button 
                                        className="btn btn-sm btn-link text-secondary text-decoration-none fw-bold p-0"
                                        onClick={() => setActiveTab('donaciones')}
                                    >
                                        Ver todas <i className="bi bi-arrow-right"></i>
                                    </button>
                                </div>
                                
                                {/* Lista de últimas donaciones (Mockup) */}
                                <div className="d-flex flex-column gap-3">
                                    
                                    {/* Donación 1 */}
                                    <div className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(236, 248, 248, 0.5)' }}>
                                        <div>
                                            <h6 className="mb-1 fw-bold text-dark">Lote de 10 Monitores Dell 24"</h6>
                                            <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>28 Feb 2026</small>
                                        </div>
                                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill">
                                            Completado
                                        </span>
                                    </div>

                                    {/* Donación 2 */}
                                    <div className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(236, 248, 248, 0.5)' }}>
                                        <div>
                                            <h6 className="mb-1 fw-bold text-dark">5 Portátiles HP ProBook</h6>
                                            <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>15 Feb 2026</small>
                                        </div>
                                        <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-2 py-1 rounded-pill">
                                            En Taller
                                        </span>
                                    </div>

                                    {/* Donación 3 */}
                                    <div className="p-3 rounded-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: 'rgba(236, 248, 248, 0.5)' }}>
                                        <div>
                                            <h6 className="mb-1 fw-bold text-dark">Lote de Periféricos mixtos</h6>
                                            <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>02 Feb 2026</small>
                                        </div>
                                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill">
                                            Completado
                                        </span>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                );
            case 'direcciones':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Mis Direcciones</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Dirección Completa</label>
                                <input type="text" className="form-control inputs" placeholder="Calle, número, piso..." />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Ciudad</label>
                                    <input type="text" className="form-control inputs" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Código Postal</label>
                                    <input type="text" className="form-control inputs" />
                                </div>
                            </div>
                            <button className="btn btn-secondary mt-3">Guardar Dirección</button>
                        </form>
                    </div>
                );
            case 'seguridad':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Seguridad</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Contraseña Actual</label>
                                <input type="password" className="form-control inputs" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nueva Contraseña</label>
                                <input type="password" className="form-control inputs" />
                            </div>
                            <button className="btn btn-secondary mt-3">Actualizar Contraseña</button>
                        </form>
                    </div>
                );
            case 'notificaciones':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Notificaciones</h2>
                        <div className="form-check form-switch mb-3 fs-5">
                            <input className="form-check-input" type="checkbox" role="switch" id="notifPedidos" defaultChecked />
                            <label className="form-check-label ms-2" htmlFor="notifPedidos">Actualizaciones de mis peticiones/donaciones</label>
                        </div>
                        <div className="form-check form-switch mb-3 fs-5">
                            <input className="form-check-input" type="checkbox" role="switch" id="notifNovedades" />
                            <label className="form-check-label ms-2" htmlFor="notifNovedades">Novedades y boletín</label>
                        </div>
                        <button className="btn btn-secondary mt-4">Guardar Preferencias</button>
                    </div>
                );
            case 'privacidad':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Privacidad y Datos</h2>
                        <button className="btn btn-outline-primary mb-3 d-block"><i className="bi bi-download me-2"></i>Descargar mis datos</button>
                        <hr className="my-4"/>
                        <h5 className="text-danger">Zona de Peligro</h5>
                        <button className="btn btn-outline-danger mt-2">Eliminar mi cuenta</button>
                    </div>
                );
            case 'peticiones':
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Peticiones Activas</h2><p>Aquí irá la tabla de equipos solicitados.</p></div>;
            case 'historial':
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Historial</h2><p>Listado de equipos que has recibido en el pasado.</p></div>;
            case 'donaciones':
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Mis Donaciones</h2><p>Aquí irá el listado COMPLETO de lotes donados.</p></div>;
            case 'certificados':
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Certificados</h2><p>Descarga tus certificados de donación aquí.</p></div>;
            case 'fiscal':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Datos Fiscales</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Razón Social</label>
                                <input type="text" className="form-control inputs" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">CIF</label>
                                <input type="text" className="form-control inputs" />
                            </div>
                            <button className="btn btn-secondary mt-3">Guardar Datos Fiscales</button>
                        </form>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <main className="container-fluid container-xl user-config-container mt-5 pt-5 mb-5">

                {/* BOTÓN DE PRUEBAS */}
                <div className="alert alert-info d-flex justify-content-between align-items-center mb-4">
                    <span>Estás viendo la interfaz como: <strong>{userRole === 'individual' ? 'Usuario Particular' : 'Empresa'}</strong></span>
                    <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => {
                            setUserRole(userRole === 'individual' ? 'empresa' : 'individual');
                            setActiveTab('perfil');
                        }}
                    >
                        Cambiar Rol (Prueba)
                    </button>
                </div>

                {/* SALUDO GLOBAL */}
                <div className="d-flex align-items-center mb-4">
                    <h1 className="fw-bold mb-0 text-primary">
                        ¡Hola, {userRole === 'individual' ? 'Usuario' : 'Empresa'}!
                    </h1>
                </div>

                <div className="row g-4 align-items-stretch">
                    
                    {/* MENÚ LATERAL */}
                    <aside className="col-12 col-lg-3">
                        <div className="config-sidebar bg-white rounded shadow-sm p-3 h-100 d-flex flex-column">
                            
                            <div className="list-group list-group-flush custom-list-group flex-grow-1">
                                <button className={`list-group-item list-group-item-action ${activeTab === 'perfil' ? 'active' : ''}`} onClick={() => setActiveTab('perfil')}>
                                    <i className="bi bi-person-vcard me-2"></i> Mi Perfil
                                </button>
                                <button className={`list-group-item list-group-item-action ${activeTab === 'direcciones' ? 'active' : ''}`} onClick={() => setActiveTab('direcciones')}>
                                    <i className="bi bi-geo-alt me-2"></i> Mis Direcciones
                                </button>
                                <button className={`list-group-item list-group-item-action ${activeTab === 'seguridad' ? 'active' : ''}`} onClick={() => setActiveTab('seguridad')}>
                                    <i className="bi bi-shield-lock me-2"></i> Seguridad
                                </button>
                                <button className={`list-group-item list-group-item-action ${activeTab === 'notificaciones' ? 'active' : ''}`} onClick={() => setActiveTab('notificaciones')}>
                                    <i className="bi bi-bell me-2"></i> Notificaciones
                                </button>
                                <button className={`list-group-item list-group-item-action ${activeTab === 'privacidad' ? 'active' : ''}`} onClick={() => setActiveTab('privacidad')}>
                                    <i className="bi bi-incognito me-2"></i> Privacidad
                                </button>

                                {userRole === 'individual' && (
                                    <>
                                        <button className={`list-group-item list-group-item-action ${activeTab === 'peticiones' ? 'active' : ''}`} onClick={() => setActiveTab('peticiones')}>
                                            <i className="bi bi-box-seam me-2"></i> Peticiones Activas
                                        </button>
                                        <button className={`list-group-item list-group-item-action ${activeTab === 'historial' ? 'active' : ''}`} onClick={() => setActiveTab('historial')}>
                                            <i className="bi bi-clock-history me-2"></i> Historial
                                        </button>
                                    </>
                                )}

                                {userRole === 'empresa' && (
                                    <>
                                        <button className={`list-group-item list-group-item-action ${activeTab === 'donaciones' ? 'active' : ''}`} onClick={() => setActiveTab('donaciones')}>
                                            <i className="bi bi-box2-heart me-2"></i> Mis Donaciones
                                        </button>
                                        <button className={`list-group-item list-group-item-action ${activeTab === 'certificados' ? 'active' : ''}`} onClick={() => setActiveTab('certificados')}>
                                            <i className="bi bi-file-earmark-check me-2"></i> Certificados
                                        </button>
                                        <button className={`list-group-item list-group-item-action ${activeTab === 'fiscal' ? 'active' : ''}`} onClick={() => setActiveTab('fiscal')}>
                                            <i className="bi bi-building me-2"></i> Datos Fiscales
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="mt-auto pt-4 border-top">
                                <button className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center">
                                    <i className="bi bi-box-arrow-left me-2"></i> Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* ÁREA DE CONTENIDO */}
                    <section className="col-12 col-lg-9">
                        <div className="config-content bg-white rounded shadow-sm p-4 p-md-5 h-100">
                            {renderContent()}
                        </div>
                    </section>
                </div>
            </main>

            <Footer /> 
        </>
    );
}