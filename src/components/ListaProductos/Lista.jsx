import { Component } from "react";
import { CardProducto } from "./CardProductos";

export default function Lista({ datos, filtroCategoria, filtroEstado, filtroNombre }) {

    function ComprobarNombre(nombreProd) {
        if (filtroNombre == "" || String(nombreProd).toLocaleLowerCase().includes(String(filtroNombre).toLocaleLowerCase())) {
            return true
        } else
            return false
    }

    let componentesProductos = [];

    datos.forEach(p => {

        if ((filtroCategoria == "" || p.categoria.nombre == filtroCategoria) &&
            (filtroEstado == "" || p.estado.nombre == filtroEstado) &&
            ComprobarNombre(p.nombre)) {

            componentesProductos.push(
                <CardProducto
                    id={p.id} // id={producto.id}
                    imagen={p.imagenUrl} //imagen={producto.imagen}
                    titulo={p.nombre} //titulo={producto.titulo} y descripcion={producto.descripcion}
                    descripcion={p.descripcion}></CardProducto>)

        }

    });

    return <>
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-4 g-5">
                {componentesProductos}
            </div>
        </div>
    </>
}