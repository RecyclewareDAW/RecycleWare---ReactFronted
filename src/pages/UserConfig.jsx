import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    const { tab } = useParams();
    const navigate = useNavigate();
    const activeTab = tab || 'perfil';

    const [userRole, setUserRole] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('usuarioRecycleware'));

        if (!session) {
            navigate('/login');
            return;
        }

        const rolNormalizado = session.rol === 'PARTICULAR' ? 'individual' : 'empresa';
        
        setUserRole(rolNormalizado);
        setLoading(false);
    }, [navigate]);

    const handleTabChange = (tabName) => {
        navigate(`/perfil/${tabName}`);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'perfil': return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
            case 'direcciones': return <TabDirecciones />;
            case 'seguridad': return <TabSeguridad />;
            case 'notificaciones': return <TabNotificaciones />;
            case 'privacidad': return <TabPrivacidad />;
            case 'ayuda': return <TabAyuda userRole={userRole} />;
            case 'peticiones': return <TabPeticiones />;
            case 'historial': return <TabHistorial />;
            case 'donaciones': return <TabDonaciones />;
            case 'impacto': return <TabImpacto />;
            default: return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
        }
    };

    // Estructura de carga consistente con el resto de la app
    if (loading) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-fill d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando configuración...</span>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            {/* Cambiamos mt-5 pt-5 por algo más ligero como tus otras páginas */}
            <main className="flex-fill container-fluid container-xl user-config-container py-5">
                
                <div className="d-flex align-items-center mb-4 ps-2">
                    <h1 className="fw-bold mb-0 text-primary animate-fade-in">
                        ¡Hola, {userRole === 'individual' ? 'Usuario' : 'Empresa'}!
                    </h1>
                </div>

                <div className="row g-4 align-items-start">
                    <Sidebar 
                        activeTab={activeTab} 
                        setActiveTab={handleTabChange} 
                        userRole={userRole} 
                    />

                    <section className="col-12 col-lg-9">
                        <div className="config-content bg-white p-4 p-md-5 h-100 shadow-sm rounded-4 animate-fade-in border">
                            {renderContent()}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}