import Header from "../components/Header"
import Footer from "../components/Footer"
import Lista from "../components/ListaProductos/Lista"
// Autor -> Luis Ginés
// https://getbootstrap.com/docs/5.3/components/list-group/

//#region Imports de api

import { api } from '../services/api';
import { useState } from "react";

//#endregion

//#region UseStates
const [listaCategorias, setListaCategorias] = useState([]);
const [listaEstados, setListaEstados] = useState([]);
const [listaProductos, setlistaProductos] = useState([]);
//#endregion

//#region Llamadas a la API iniciales para obtener la información del servidor
const endpointProductos = "/productos/disponibles";
const endpointCategorias = "/productos/categorias";
const endpointEstados = "/productos/estados";
//#endregion

async function getProductosDisponibles() {
    try {
        //Lamada de Productos disponibles
        const respuestaProductos = await api.get(endpointProductos);
        console.log(respuestaProductos);
    } catch (error) {
        alert("Error de conexión con el servidor");
        console.log(error);
    }
}
async function getCategorias() {
    try {
        // Llamada de categorias
        const respuestaApiCategorias = await api.get(endpointCategorias);
        console.log(respuestaApiCategorias);
        return respuestaApiCategorias;
    } catch (error) {
        alert("Error de conexión con el servidor");
        console.log(error);
    }


}
async function getEstados() {
    try {
        const respuestaEstados = await api.get(endpointEstados);
        console.log(respuestaEstados);

    } catch (error) {
        alert("Error de conexión con el servidor");
        console.log(error);
    }
}


export default async function ListaProductos() { //Nota preventiva -> Temporalmente se esta probando que sea async este componente para poder hacer llamadas a la API





    return <>
        <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-smooth-scroll="true"
            tabIndex={0}
        >
            <Header />


            <main className="pt-4 d-flex flex-column">
                <h1 className="titulo">Productos</h1>
                <div className="d-flex flex-lg-row flex-column p-3 justify-content-evenly">
                    <aside className="p-4 bg-white border rounded-4 shadow-sm flex-fill m-3 h-100">
                        <div>
                            <span className="h3 titulo">Filtros</span>
                            <hr></hr>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <div>
                                <label className="form-label" htmlFor="busquedaPorNombre">Búsqueda por nombre</label>
                                <input className="form-control" type="text" id="busquedaPorNombre"></input>
                            </div>
                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary bg-primary text-light" data-bs-toggle="collapse" data-bs-target="#categorias">Por categoria</div>
                                <div className="collapse" id="categorias">
                                    <div className="list-group-item list-group-item-action">Periféricos</div>
                                    <div className="list-group-item list-group-item-action">Sobremesa</div>
                                    <div className="list-group-item list-group-item-action">Portátiles</div>
                                    <div className="list-group-item list-group-item-action">Componentes</div>
                                </div>
                            </div>

                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary bg-primary text-light"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#estado">Por estado del producto</div>
                                <div className="collapse" id="estado">
                                    <div className="list-group-item list-group-item-action">Bueno</div>
                                    <div className="list-group-item list-group-item-action">Aceptable</div>
                                    <div className="list-group-item list-group-item-action">Perjudicado</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="p-4 m-3 bg-white border rounded-4 shadow-sm">
                        <Lista ></Lista>
                    </div>
                </div>
            </main>


            <Footer />
        </div>


    </>
}