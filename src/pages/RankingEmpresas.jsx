import { useState, useEffect } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListaEmpresas from "../components/RankingEmpresa/ListaEmpresas";
import { Podio } from "../components/RankingEmpresa/Podio";

export default function RankingEmpresas() {
    const [ranking, setRanking] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const obtenerRanking = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/donaciones/ranking');
                const data = await response.json();
                
                const formateados = data.map(item => ({
                    nombre: item[0],
                    donaciones: item[1]
                }));

                setRanking(formateados);
            } catch (error) {
                console.error("Error cargando ranking:", error);
            } finally {
                setCargando(false);
            }
        };
        obtenerRanking();
    }, []);

    if (cargando) {
        return (
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-fill d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const primero = ranking[0] || { nombre: "---", donaciones: 0 };
    const segundo = ranking[1] || { nombre: "---", donaciones: 0 };
    const tercero = ranking[2] || { nombre: "---", donaciones: 0 };

    const restoEmpresas = {
        posInicial: 4,
        empresas: ranking.slice(3)
    };

    return (
        <div id="ranking" className="d-flex flex-column min-vh-100">
            <Header />
            
            <main className="flex-fill container py-5">
                <div className="animate-fade-in">
                    <h2 className="display-5 titulo">Empresas Colaboradoras</h2>
                    
                    <Podio
                        nombre1={primero.nombre}
                        donaciones1={primero.donaciones}
                        nombre2={segundo.nombre}
                        donaciones2={segundo.donaciones}
                        nombre3={tercero.nombre}
                        donaciones3={tercero.donaciones}
                    />

                    {ranking.length > 3 ? (
                        <ListaEmpresas datos={restoEmpresas} />
                    ) : (
                        <div className="alert alert-light text-center border rounded-4 shadow-sm py-4 mt-4">
                            <i className="bi bi-info-circle me-2 text-primary"></i>
                            Próximamente más empresas en el ranking...
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}