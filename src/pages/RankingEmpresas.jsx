import Footer from "../components/Footer";
import Header from "../components/Header";
import ListaEmpresas from "../components/RankingEmpresa/ListaEmpresas";
import { Podio } from "../components/RankingEmpresa/Podio";


export default function RankingEmpresas() {
    const datos = {
        posInicial: 4,
        empresas: [
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "Dxc", donaciones: "2000" },
            { nombre: "NTTData", donaciones: "1000" }
        ],

    };


    return <>
        <Header />
        <main className="container">
            <div className="d-flex flex-column">
                <h2 className="display-3 titulo text-center">Empresas participantes</h2>
                <Podio
                    nombre1={"Patata EXTREME"}
                    nombre2={"Patata Nº2"}
                    nombre3={"Patata Nº3"}
                    donaciones1={10000}
                    donaciones2={5000}
                    donaciones3={3000}
                ></Podio>
                <ListaEmpresas datos={datos}></ListaEmpresas>

            </div>
        </main>
        <Footer></Footer>
    </>
}