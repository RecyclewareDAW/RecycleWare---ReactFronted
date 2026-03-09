import Header from "../components/Header"

import Footer from "../components/Footer"

export default function CrudUsuarios() {

    return <>
        <Header />
        <main className="p-4 d-flex flex-column min-vh-100">
            <h1 className="titulo">Usuarios</h1>
            <div className="container-fluid mb-5">
                <div className="row gx-3 h-100">
                    <div className="col-12 col-lg-3">
                        <aside className="p-4 bg-white border rounded-4 shadow-sm"> {/*------------------------------------------------------Columna 1*/}
                            <label className="form-label" htmlFor="busquedaPorNombre">Búsqueda por nombre</label>
                            <input className="form-control" type="text" id="busquedaPorNombre"></input>
                            <hr></hr>
                            <div className="list-group">
                                <div className="fw-bold list-group-item list-group-item-action list-group-item-primary"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#categorias">Tipo de usuario</div>
                                <div className="collapse" id="categorias">
                                    <div className="list-group-item list-group-item-action">Particular</div>
                                    <div className="list-group-item list-group-item-action">Empresa</div>
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