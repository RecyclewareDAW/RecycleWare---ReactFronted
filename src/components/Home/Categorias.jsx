import Card from "../Card";

const Categorias = () => {
    return (
        <section className="container" id="categorias">
            <h2 className="titulo">Productos y Categorías</h2>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://github.com/LGCaparrosBalmis/ImagenesRecycleware/blob/main/resized_960px-Lenovo_G500s_laptop-2903.jpg?raw=true"
                        titulo="Portátiles"
                        descripcion="Equipos reacondicionados listos para usar."
                        enlace="/productos"
                    ></Card>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://github.com/LGCaparrosBalmis/ImagenesRecycleware/blob/main/resized_artec-pc-540x540.jpg?raw=true"
                        titulo="Sobremesa"
                        descripcion="Ordenadores de escritorio para oficinas y hogares."
                        enlace="/productos"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://github.com/LGCaparrosBalmis/ImagenesRecycleware/blob/main/resized_Sapphire-Radeon-HD-5570-Video-Card.jpg?raw=true"
                        titulo="Componentes"
                        descripcion="Discos duros, memoria RAM, tarjetas gráficas."
                        enlace="/productos"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <Card
                        imagen="https://github.com/LGCaparrosBalmis/ImagenesRecycleware/blob/main/resized_Dell_Computer_Monitor.png?raw=true"
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