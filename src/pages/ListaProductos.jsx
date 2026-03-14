import Header from "../components/Header"
import Footer from "../components/Footer"
import Lista from "../components/ListaProductos/Lista"
// Autor -> Luis Ginés
// https://getbootstrap.com/docs/5.3/components/list-group/

//#region Imports de api

import { api } from '../services/api';
import { useEffect, useState } from "react";

//#endregion



//#region parametrización de los endpoints necesarios
const endpointProductos = "/productos/disponibles";
const endpointCategorias = "/productos/categorias";
const endpointEstados = "/productos/estados";
//#endregion



export default function ListaProductos() {

    //Preparación para los filtros de la lista

    const [filtroEstado, setFiltroEstado] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroNombre, setFiltroNombre] = useState("");


    // Manejo de eventos de inputs de filtrado

    function filtrarNombre(value){
        setFiltroNombre(value);
    }


    //Preparacion de las listas de datos
    const [listaEstados, setListaEstados] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);




    // Contactar con la base de datos
    useEffect(() => {

        //Descarga de los Estados de la BD
        api.get(endpointEstados).then((result) => {
            setListaEstados(result)
        })

        //Descarga de los Estados de la BD
        api.get(endpointProductos).then((result) => {
            setListaProductos(result)
        })

        //Descarga de las Categorias de la BD
        api.get(endpointCategorias).then((result) => {
            setListaCategorias(result)
        })
    }, [])


    //Creación de componentes

    let componentesCategorias = [];
    listaCategorias.forEach(categoria => {
        componentesCategorias.push(<div className="list-group-item list-group-item-action" onClick={() => {
            if (filtroCategoria == "")
                setFiltroCategoria(categoria)
            else
                setFiltroCategoria("")    
            
        }}>{categoria}</div>)
    });

    let componentesEstados = [];
    listaEstados.forEach(estado => {
        componentesEstados.push(<div className="list-group-item list-group-item-action" onClick={() => {
            if (filtroEstado == "")
                setFiltroEstado(estado)
            else
                setFiltroEstado("")  
            console.log(estado) 
            
        }}>{estado}</div>)
    });




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
                    <aside className="p-4 bg-white border rounded-4 shadow-sm w-25 m-3 h-100">
                        <div>
                            <span className="h3 titulo">Filtros</span>
                            <hr></hr>
                        </div>
                        <div className="d-flex flex-column gap-3">
                            <div>
                                <label className="form-label" htmlFor="busquedaPorNombre">Búsqueda por nombre</label>
                                <input className="form-control" type="text" id="busquedaPorNombre" onChange={() => filtrarNombre(busquedaPorNombre.value)}></input>
                            </div>
                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary bg-primary text-light" data-bs-toggle="collapse" data-bs-target="#categorias">Por categoria</div>
                                <div className="collapse" id="categorias">
                                    {componentesCategorias}
                                </div>
                            </div>

                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary bg-primary text-light"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#estado">Por estado del producto</div>
                                <div className="collapse" id="estado">
                                    {componentesEstados}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="p-4 m-3 bg-white border rounded-4 shadow-sm flex-fill">
                        <Lista datos={listaProductos}
                            filtroCategoria={filtroCategoria}
                            filtroEstado={filtroEstado}
                            filtroNombre={filtroNombre}></Lista>
                    </div>
                </div>
            </main>


            <Footer />
        </div>


    </>
}