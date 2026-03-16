import Card from "../Card";

const Categorias = () => {
    return (
        <section className="container" id="categorias">
            <h2 className="titulo">Productos y Categorías</h2>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://picsum.photos/id/231/600/600"
                        titulo="Portátiles"
                        descripcion="Equipos reacondicionados listos para usar."
                        enlace="/productos"
                    ></Card>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://picsum.photos/id/236/600/600"
                        titulo="Sobremesa"
                        descripcion="Ordenadores de escritorio para oficinas y hogares."
                        enlace="/productos"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://picsum.photos/id/235/600/600"
                        titulo="Componentes"
                        descripcion="Discos duros, memoria RAM, tarjetas gráficas."
                        enlace="/productos"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://picsum.photos/id/234/600/600"
                        titulo="Periféricos"
                        descripcion="Teclados, ratones, monitores y más."
                        enlace="/productos"
                    />
                </div>
            </div>
        </section>
    )
}

export default Categorias;