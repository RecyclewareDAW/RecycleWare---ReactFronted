import { useState, useRef } from 'react'; // <-- Importación corregida
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserConfig() {
    // Estados para controlar la interfaz
    const [activeTab, setActiveTab] = useState('perfil');
    const [userRole, setUserRole] = useState('individual'); // Mock: 'individual' o 'empresa'

    // --- SELECCIONAR Y GUARDAR LA FOTO DE PERFIL ---
    const [profileImage, setProfileImage] = useState(null); // Guardará la URL de la imagen
    const fileInputRef = useRef(null); // Referencia oculta para el input de archivo

    // Función que se ejecuta al seleccionar una foto
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Crea una URL temporal para previsualizar la imagen al instante
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    // Función para renderizar el contenido dinámico a la derecha
    const renderContent = () => {
        switch (activeTab) {
            case 'perfil':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Datos Personales</h2>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" placeholder="Tu nombre" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" placeholder="Tus apellidos" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" placeholder="tucorreo@ejemplo.com" />
                            </div>
                            <button className="btn btn-secondary mt-3">Guardar Cambios</button>
                        </form>
                    </div>
                );
            case 'direcciones':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Mis Direcciones</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Dirección Completa</label>
                                <input type="text" className="form-control" placeholder="Calle, número, piso..." />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Ciudad</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Código Postal</label>
                                    <input type="text" className="form-control" />
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
                                <input type="password" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nueva Contraseña</label>
                                <input type="password" className="form-control" />
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
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Mis Donaciones</h2><p>Aquí irá el listado de lotes donados.</p></div>;
            case 'certificados':
                return <div className="animate-fade-in"><h2 className="titulo mb-4 border-bottom pb-2">Certificados</h2><p>Descarga tus certificados de donación aquí.</p></div>;
            case 'fiscal':
                return (
                    <div className="animate-fade-in">
                        <h2 className="titulo mb-4 border-bottom pb-2">Datos Fiscales</h2>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Razón Social</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">CIF</label>
                                <input type="text" className="form-control" />
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

                <div className="row g-4">
                    {/* MENÚ LATERAL */}
                    <aside className="col-12 col-lg-3">
                        <div className="config-sidebar bg-white rounded shadow-sm p-3">
                            
                            {/* --- ZONA DE AVATAR  --- */}
                            <div className="text-center mb-3 pt-2 border-bottom pb-4">
                                <div className="avatar-placeholder bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-primary" style={{ overflow: 'hidden' }}>
                                    {/* Renderizado condicional de la imagen o el icono */}
                                    {profileImage ? (
                                        <img src={profileImage} alt="Perfil del usuario" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <i className="bi bi-person"></i>
                                    )}
                                </div>
                                <h5 className="mb-1">¡Hola, Usuario!</h5>
                                <small className="text-muted d-block mb-3">Gestiona tu cuenta</small>
                                
                                {/* INPUT OCULTO AÑADIDO AQUÍ */}
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    ref={fileInputRef} 
                                    onChange={handleImageChange} 
                                    className="d-none" 
                                />

                                {/* BOTÓN CONECTADO AL INPUT MEDIANTE ONCLICK */}
                                <button 
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <i className="bi bi-camera me-2"></i>Cambiar foto
                                </button>
                            </div>
                            {/* ---------------------------- */}

                            <div className="list-group list-group-flush custom-list-group">
                                {/* GLOBAL */}
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

                                {/* SOLO USUARIO PARTICULAR */}
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

                                {/* SOLO EMPRESA */}
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

                                {/* CERRAR SESIÓN (GLOBAL) */}
                                <button className="list-group-item list-group-item-action text-danger mt-4">
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