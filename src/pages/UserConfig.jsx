import { useState } from 'react';
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
import TabCertificados from '../components/UserConfig/TabCertificados';
import TabImpacto from '../components/UserConfig/TabImpacto';

export default function UserConfig() {
    const [activeTab, setActiveTab] = useState('perfil');
    const [userRole, setUserRole] = useState('empresa'); 

    // Gestor de contenido dinámico basado en la pestaña activa
    const renderContent = () => {
        switch (activeTab) {
            case 'perfil': return <TabPerfil userRole={userRole} setActiveTab={setActiveTab} />;
            case 'direcciones': return <TabDirecciones />;
            case 'seguridad': return <TabSeguridad />;
            case 'notificaciones': return <TabNotificaciones />;
            case 'privacidad': return <TabPrivacidad />;
            case 'ayuda': return <TabAyuda />;
            case 'peticiones': return <TabPeticiones />;
            case 'historial': return <TabHistorial />;
            case 'donaciones': return <TabDonaciones />;
            case 'certificados': return <TabCertificados />;
            case 'impacto': return <TabImpacto />;
            default: return null;
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
                            setActiveTab('perfil');
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

                <div className="row g-4 align-items-stretch">
                    <Sidebar 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab} 
                        userRole={userRole} 
                    />

                    <section className="col-12 col-lg-9">
                        <div className="config-content bg-white p-4 p-md-5 h-100">
                            {renderContent()}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>

    );
}