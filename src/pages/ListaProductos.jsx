import Header from "../components/Header"
import Card from "../components/Card"
import Footer from "../components/Footer"
import Categorias from "../components/Home/Categorias"
import Lista from "../components/ListaProductos/Lista"
// Autor -> Luis Ginés
// https://getbootstrap.com/docs/5.3/components/list-group/
export default function ListaProductos() {
    return <>
        <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-smooth-scroll="true"
            tabIndex={0}
        >
            <Header />


            <main className="pt-header d-flex flex-column">
                <h1 className="titulo">Productos</h1>
                <div className="d-flex flex-row p-3 justify-content-evenly">
                    <aside className="p-4 bg-white border rounded-4 shadow-smpx-5 w-25 h-100">
                        <div className="list-group">
                            <div className="fw-bold list-group-item list-group-item-action list-group-item-primary" data-bs-toggle="collapse" data-bs-target="#categorias">Categorias</div>
                            <div className="collapse" id="categorias">
                                <div className="list-group-item list-group-item-action">Periféricos</div>
                                <div className="list-group-item list-group-item-action">Sobremesa</div>
                                <div className="list-group-item list-group-item-action">Portátiles</div>
                                <div className="list-group-item list-group-item-action">Componentes</div>
                            </div>
                        </div>
                        <hr></hr>
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
                    </aside>
                    <div className="p-4 bg-white border rounded-4 shadow-smpx-5">
                        <Lista ></Lista>
                    </div>
                </div>
            </main>


            <Footer />
        </div>


    </>
}