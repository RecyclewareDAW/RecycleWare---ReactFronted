import { Component } from "react";
import { CardProducto } from "./CardProductos";

export default function Lista({ datos, filtroCategoria, filtroEstado, filtroNombre }) {



    let componentesProductos = [];

    datos.forEach(p => {


        componentesProductos.push(
            <CardProducto
                id={p.id} // id={producto.id}
                imagen={p.imagenUrl} //imagen={producto.imagen}
                titulo={p.nombre} //titulo={producto.titulo} y descripcion={producto.descripcion}
                descripcion={p.descripcion}></CardProducto>)

    });

    return <>
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 g-5">
                <CardProducto
                    id={1} // id={producto.id}
                    imagen="https://picsum.photos/id/231/600/600" //imagen={producto.imagen}
                    titulo="Portátiles" //titulo={producto.titulo} y descripcion={producto.descripcion}
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
                {componentesProductos}
            </div>
        </div>
    </>
}