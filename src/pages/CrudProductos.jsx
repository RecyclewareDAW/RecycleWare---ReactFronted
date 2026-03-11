import Header from "../components/Header"

import Footer from "../components/Footer"

export default function CrudProductos() {

    return <>
        <Header />
        <main className="p-4 d-flex flex-column min-vh-100">
            <h1 className="titulo">Productos</h1>
            <div className="container-fluid mb-5">
                <div className="row gx-3 h-100">
                    <div className="col-12 col-lg-3">
                        <aside className="p-4 bg-white border rounded-4 shadow-sm"> {/*------------------------------------------------------Columna 1*/}
                            <div>
                                <span className="h3 titulo">Filtros</span>
                                <hr></hr>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                <div>
                                    <label className="form-label" htmlFor="busquedaPorNombre">Búsqueda por nombre</label>
                                    <input className="form-control" type="text" id="busquedaPorNombre"></input>
                                </div>

                                <div>
                                    <label className="form-label" htmlFor="busquedaPorDonante">Búsqueda por donante</label>
                                    <input className="form-control" type="text" id="busquedaPorDonante"></input>
                                </div>

                                <div className="list-group">
                                    <div className="fw-bold list-group-item list-group-item-action list-group-item-primary" data-bs-toggle="collapse" data-bs-target="#categorias">Categorias</div>
                                    <div className="collapse" id="categorias">
                                        <div className="list-group-item list-group-item-action">Periféricos</div>
                                        <div className="list-group-item list-group-item-action">Sobremesa</div>
                                        <div className="list-group-item list-group-item-action">Portátiles</div>
                                        <div className="list-group-item list-group-item-action">Componentes</div>
                                    </div>
                                </div>

                                <div className="list-group">
                                    <div className="fw-bold list-group-item list-group-item-action list-group-item-primary"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#estado">Estado del producto</div>
                                    <div className="collapse" id="estado">
                                        <div className="list-group-item list-group-item-action">Bueno</div>
                                        <div className="list-group-item list-group-item-action">Aceptable</div>
                                        <div className="list-group-item list-group-item-action">Perjudicado</div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col ">
                        <div className="p-4 bg-white border rounded-4 shadow-sm">{/*------------------------------------------------------Columna 2*/}
                            <div>Insertar Lista</div>
                        </div></div>

                </div>

            </div>
        </main>
        <Footer />
    </>
}