import Header from "../components/Header"
import Footer from "../components/Footer"
import Lista from "../components/ListaProductos/Lista"

import { api } from '../services/api';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const endpointProductos = "/productos/disponibles";
const endpointCategorias = "/productos/categorias";
const endpointEstados = "/productos/estados";



export default function ListaProductos() {

    const { nombreProducto } = useParams();

    const [filtroEstado, setFiltroEstado] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");
    const [filtroNombre, setFiltroNombre] = useState(nombreProducto == undefined ? "" : nombreProducto);

    const [listaEstados, setListaEstados] = useState([]);
    const [listaProductos, setListaProductos] = useState([]);
    const [listaCategorias, setListaCategorias] = useState([]);

    useEffect(() => {

        api.get(endpointEstados).then((result) => {
            setListaEstados(result)
        })
       
        api.get(endpointProductos).then((result) => {
            setListaProductos(result)
        })

        api.get(endpointCategorias).then((result) => {
            setListaCategorias(result)
        })
    }, [])


    let componentesCategorias = [];
    listaCategorias.forEach(categoria => {
        componentesCategorias.push(<a data-bs-toggle="list" role="compCat" className="list-group-item list-group-item-action list-group-item-light " onClick={() => { setFiltroCategoria(categoria)}}>{categoria}</a>)
    });

    let componentesEstados = [];
    listaEstados.forEach(estado => {
        componentesEstados.push(<a data-bs-toggle="list" role="compEst" className="list-group-item list-group-item-action list-group-item-light" onClick={() => {setFiltroEstado(estado)}}>{estado}</a>)
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
                <h1 className="titulo p-0">Productos</h1>
                <div className="d-flex flex-lg-row flex-column p-3 justify-content-between">
                    <aside className="p-3 bg-white border rounded-4 shadow-sm m-2 h-100">
                        <div>
                            <span className="h3 titulo">Filtros</span>
                            <hr></hr>
                        </div>
                        <div className="d-flex flex-column gap-4">
                            <div>
                                <label className="form-label" htmlFor="busquedaPorNombre">Búsqueda por nombre</label>
                                <input className="form-control" type="text" value={filtroNombre} id="busquedaPorNombre" onInput={() => {
                                    setFiltroNombre(busquedaPorNombre.value);
                                }}></input>
                            </div>
                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action bg-primary text-light" data-bs-toggle="collapse" data-bs-target="#categorias">Por categoria</div>
                                <div className="collapse" id="categorias">
                                    <a href="#" data-bs-toggle="list"
                                     role="compCat" className="list-group-item list-group-item-action list-group-item-light active"
                                      onClick={() => {setFiltroCategoria("")}}
                                      >Todos</a>
                                    {componentesCategorias}
                                </div>
                            </div>

                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary bg-primary text-light"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#estado">Por estado del producto</div>
                                <div className="collapse" id="estado">
                                    <a href="#" data-bs-toggle="list"
                                     role="compEst" className="list-group-item list-group-item-action list-group-item-light active"
                                      onClick={() => {setFiltroEstado("")}}
                                      >Todos</a>
                                    {componentesEstados}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className="p-3 m-2 w-100 bg-white border rounded-4 shadow-sm">
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