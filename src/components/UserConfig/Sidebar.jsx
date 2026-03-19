import ButtonSidebar from './ButtonSidebar';
import ButtonLogout from '../Session/ButtonLogout';

export default function Sidebar({ activeTab, setActiveTab, userRole }) {
    return (
        <aside className="col-12 col-lg-3">
            <div className="config-sidebar bg-white p-3 h-100 d-flex flex-column">
                
                <div className="list-group list-group-flush custom-list-group flex-grow-1">
                    {/* Opciones Globales */}
                    <ButtonSidebar tabId="perfil" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-person-vcard" label="Mi Perfil" />
                    <ButtonSidebar tabId="direcciones" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-geo-alt" label="Dirección" />
                    <ButtonSidebar tabId="seguridad" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-shield-lock" label="Seguridad" />
                   

                    {/* Opciones Particulares */}
                    {userRole === 'individual' && (
                        <>
                            <ButtonSidebar tabId="peticiones" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-box-seam" label="Peticiones Activas" />
                            <ButtonSidebar tabId="historial" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-clock-history" label="Historial" />
                        </>
                    )}

                    {/* Opciones Empresas */}
                    {userRole === 'empresa' && (
                        <>
                            <ButtonSidebar tabId="donaciones" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-box2-heart" label="Mis Donaciones" />
                            <ButtonSidebar tabId="impacto" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-globe-europe-africa" label="Mi Impacto" />
                        </>
                    )}

                    {/* Ayuda Global */}
                    <hr className="my-2 text-muted opacity-25" />
                    <ButtonSidebar tabId="ayuda" activeTab={activeTab} setActiveTab={setActiveTab} icon="bi-life-preserver" label="Ayuda y Soporte" />
                </div>

                <div className="mt-auto pt-4 border-top">
                    <ButtonLogout className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center">
                        <i className="bi bi-box-arrow-left me-2"></i> Cerrar Sesión
                    </ButtonLogout>
                </div>
            </div>
        </aside>
    );
}