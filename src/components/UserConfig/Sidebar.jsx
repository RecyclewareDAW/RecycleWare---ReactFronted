import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, userRole }) {
    return (
        <aside className="col-12 col-lg-3">
            <div className="config-sidebar bg-white p-3 h-100 d-flex flex-column">
                
                <div className="list-group list-group-flush custom-list-group flex-grow-1">
                    {/* Opciones Globales */}
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

                    {/* Opciones Particulares */}
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

                    {/* Opciones Empresas */}
                    {userRole === 'empresa' && (
                        <>
                            <button className={`list-group-item list-group-item-action ${activeTab === 'donaciones' ? 'active' : ''}`} onClick={() => setActiveTab('donaciones')}>
                                <i className="bi bi-box2-heart me-2"></i> Mis Donaciones
                            </button>
                            <button className={`list-group-item list-group-item-action ${activeTab === 'certificados' ? 'active' : ''}`} onClick={() => setActiveTab('certificados')}>
                                <i className="bi bi-file-earmark-check me-2"></i> Certificados
                            </button>
                            <button className={`list-group-item list-group-item-action ${activeTab === 'impacto' ? 'active' : ''}`} onClick={() => setActiveTab('impacto')}>
                                <i className="bi bi-globe-europe-africa me-2"></i> Mi Impacto
                            </button>
                        </>
                    )}

                    {/* Ayuda Global */}
                    <hr className="my-2 text-muted opacity-25" />
                    <button className={`list-group-item list-group-item-action ${activeTab === 'ayuda' ? 'active' : ''}`} onClick={() => setActiveTab('ayuda')}>
                        <i className="bi bi-life-preserver me-2"></i> Ayuda y Soporte
                    </button>
                </div>

                <div className="mt-auto pt-4 border-top">
                    <button className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center">
                        <i className="bi bi-box-arrow-left me-2"></i> Cerrar Sesión
                    </button>
                </div>
            </div>
        </aside>
    );
}