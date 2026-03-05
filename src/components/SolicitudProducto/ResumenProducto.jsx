import Card from './../Card';

export default function ResumenProducto({ producto }) {
    return (
        <div className="col-lg-5 d-flex"> 
            <Card 
                imagen={producto.imagen}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
                estado={producto.estado}
            />
        </div>
    );
}