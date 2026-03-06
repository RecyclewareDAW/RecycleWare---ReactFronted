import { CardProducto } from "./CardProductos";

export default function Lista() {
    return <>
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 g-5">
                <CardProducto
                    imagen="https://picsum.photos/id/231/600/600"
                    titulo="Portátiles"
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
                <CardProducto
                    imagen="https://picsum.photos/id/231/600/600"
                    titulo="Portátiles"
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
                <CardProducto
                    imagen="https://picsum.photos/id/231/600/600"
                    titulo="Portátiles"
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
                <CardProducto
                    imagen="https://picsum.photos/id/231/600/600"
                    titulo="Portátiles"
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
                <CardProducto
                    imagen="https://picsum.photos/id/231/600/600"
                    titulo="Portátiles"
                    descripcion="Equipos reacondicionados listos para usar"></CardProducto>
            </div>
        </div>
    </>
}