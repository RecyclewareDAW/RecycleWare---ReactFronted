import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // <--- IMPORTANTE
import Header from '../components/Header';
import Sidebar from '../components/UserConfig/Sidebar';
import Footer from '../components/Footer'; 

// Importación de todas las pestañas
import TabPerfil from '../components/UserConfig/TabPerfil';
import TabDirecciones from '../components/UserConfig/TabDirecciones';
import TabSeguridad from '../components/UserConfig/TabSeguridad';
import TabNotificaciones from '../components/UserConfig/TabNotificaciones';
import TabPrivacidad from '../components/UserConfig/TabPrivacidad';
import TabAyuda from '../components/UserConfig/TabAyuda';
import TabPeticiones from '../components/UserConfig/TabPeticiones';
import TabHistorial from '../components/UserConfig/TabHistorial';
import TabDonaciones from '../components/UserConfig/TabDonaciones';
import TabImpacto from '../components/UserConfig/TabImpacto';

export default function UserConfig() {
    const { tab } = useParams(); // Lee el parámetro de la URL
    const navigate = useNavigate();
    
    // Sincronizamos el estado con la URL
    const activeTab = tab || 'perfil';
    const [userRole, setUserRole] = useState('empresa'); 

    // Función para cambiar de pestaña navegando (esto actualiza la URL)
    const handleTabChange = (tabName) => {
        navigate(`/perfil/${tabName}`);
    };

    // Gestor de contenido dinámico basado en la pestaña activa
    const renderContent = () => {
        switch (activeTab) {
            case 'perfil': return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
            case 'direcciones': return <TabDirecciones />;
            case 'seguridad': return <TabSeguridad />;
            case 'notificaciones': return <TabNotificaciones />;
            case 'privacidad': return <TabPrivacidad />;
            case 'ayuda': return <TabAyuda />;
            case 'peticiones': return <TabPeticiones />;
            case 'historial': return <TabHistorial />;
            case 'donaciones': return <TabDonaciones />;
            case 'impacto': return <TabImpacto />;
            default: return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
        }
    };

    return (
        <>
            <Header />
            <main className="container-fluid container-xl user-config-container mt-5 pt-5 mb-5">
                <div className="alert alert-info d-flex justify-content-between align-items-center mb-4">
                    <span>Estás viendo la interfaz como: <strong>{userRole === 'individual' ? 'Usuario Particular' : 'Empresa'}</strong></span>
                    <button
                        className="btn btn-sm btn-outline-dark"
                        onClick={() => {
                            setUserRole(userRole === 'individual' ? 'empresa' : 'individual');
                            handleTabChange('perfil'); // Navegamos a perfil al cambiar rol
                        }}
                    >
                        Cambiar Rol (Prueba)
                    </button>
                </div>

                <div className="d-flex align-items-center mb-4">
                    <h1 className="fw-bold mb-0 text-primary">
                        ¡Hola, {userRole === 'individual' ? 'Usuario' : 'Empresa'}!
                    </h1>
                </div>

                <div className="row g-4 align-items-start">
                    <Sidebar 
                        activeTab={activeTab} 
                        setActiveTab={handleTabChange} // Pasamos la función de navegación
                        userRole={userRole} 
                    />

                    <section className="col-12 col-lg-9">
                        <div className="config-content bg-white p-4 p-md-5 h-100 shadow-sm rounded-4">
                            {renderContent()}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}