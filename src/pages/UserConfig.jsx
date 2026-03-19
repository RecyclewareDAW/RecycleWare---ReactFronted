import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/UserConfig/Sidebar';
import Footer from '../components/Footer';

// Importación de todas las pestañas
import TabPerfil from '../components/UserConfig/TabPerfil';
import TabDirecciones from '../components/UserConfig/TabDirecciones';
import TabSeguridad from '../components/UserConfig/TabSeguridad';
import TabAyuda from '../components/UserConfig/TabAyuda';
import TabPeticiones from '../components/UserConfig/TabPeticiones';
import TabHistorial from '../components/UserConfig/TabHistorial';
import TabDonaciones from '../components/UserConfig/TabDonaciones';
import TabImpacto from '../components/UserConfig/TabImpacto';

export default function UserConfig() {
    const { tab } = useParams();
    const navigate = useNavigate();
    const activeTab = tab || 'perfil';

    const [userRole, setUserRole] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');

    // Leemos la sesión real del usuario al cargar la página
    useEffect(() => {
        const session = localStorage.getItem('usuarioRecycleware');
        if (session) {
            const userData = JSON.parse(session || '{}');
            // Si el rol en BD es EMPRESA, le pasamos 'empresa', sino 'individual'
            setUserRole(userData.rol === 'EMPRESA' ? 'empresa' : 'individual');
            // Sacamos el nombre (o la razón social si es empresa) para el saludo
            setNombreUsuario(userData.rol === 'EMPRESA' ? userData.razonSocial : userData.nombre);
        } else {
            // Si alguien intenta entrar aquí sin estar logueado, lo echamos al login
            navigate('/login');
        }
    }, [navigate]);

    // Función para gestionar el cambio de pestañas vía URL
    const handleTabChange = (tabName) => {
        navigate(`/perfil/${tabName}`);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'perfil': return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
            case 'direcciones': return <TabDirecciones />;
            case 'seguridad': return <TabSeguridad />;
            case 'ayuda': return <TabAyuda userRole={userRole} />;
            case 'peticiones': return <TabPeticiones />;
            case 'historial': return <TabHistorial />;
            case 'donaciones': return <TabDonaciones />;
            case 'impacto': return <TabImpacto />;
            default: return <TabPerfil userRole={userRole} setActiveTab={handleTabChange} />;
        }
    };

    if (!userRole) return null;

    return (
        <>
            <Header />
            <main className="container-fluid container-xl user-config-container mt-5 mb-5">
                
                <div className="d-flex align-items-center mb-4">
                    <h1 className="fw-bold mb-0 text-primary">
                        ¡Hola, {nombreUsuario}!
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
        </>
    );
}