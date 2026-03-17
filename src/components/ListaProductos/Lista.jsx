import { CardProducto } from "./CardProductos";

export default function Lista({ datos, filtroCategoria, filtroEstado, filtroNombre }) {

    function ComprobarNombre(nombreProd) {
        return filtroNombre === "" || 
               String(nombreProd).toLowerCase().includes(String(filtroNombre).toLowerCase());
    }

    let componentesProductos = [];

    datos.forEach(p => {
        if ((filtroCategoria === "" || p.categoria.nombre === filtroCategoria) &&
            (filtroEstado === "" || p.estado.nombre === filtroEstado) &&
            ComprobarNombre(p.nombre)) {

            componentesProductos.push(
                <CardProducto
                    key={p.id} 
                    producto={p} // Pasamos el objeto entero p
                />
            );
        }
    });

    return (
        <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-5">
                {componentesProductos}
            </div>
        </div>
    );
}