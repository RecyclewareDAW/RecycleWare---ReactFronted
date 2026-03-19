import { Link } from "react-router-dom"; // Asumiendo que usas react-router

export default function Footer({ colaboradores }) {
    // Esto es temporal, serán las 3 primeras empresas top donantes las que aparezcan cogidas de la base de datos
    // const top3 = colaboradores || [
    //     { nombre: "Empresa A" },
    //     { nombre: "Asociación B" },
    //     { nombre: "Org C" }
    // ];

    // const datosBrutos = localStorage.getItem('usuarioRecycleware');

    // // 2. Creamos la variable usuario con seguridad total
    // let usuario = {};

    // // 3. Solo intentamos parsear si hay algo y NO es la palabra "undefined"
    // if (datosBrutos && datosBrutos !== "undefined") {
    //     try {
    //         usuario = JSON.parse(datosBrutos);
    //     } catch (e) {
    //         console.error("Error al parsear el usuario, limpiando...", e);
    //         usuario = {};
    //     }
    // }

    return (
        <footer className="text-center text-light bg-dark">
            <div className="container p-4 pb-0">

                <section className="mb-3 d-flex flex-wrap justify-content-center gap-5 small ">
                    {/* <span>
                        <Link to="/ranking" className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">
                            <strong>Colaboradores:</strong>
                            <span className="ms-1">
                                {top3[0]?.nombre} | {top3[1]?.nombre} | {top3[2]?.nombre}
                            </span>
                        </Link>
                    </span> */}
                    <span>
                        <strong className="text-light">Ubicación:</strong>
                        <span className=" ms-1">Centro IES Doctor Balmis 03010, Alicante</span>
                    </span>
                </section>

                <section>
                    <a className="btn btn-outline-secondary rounded-circle m-1" href="https://www.instagram.com/accounts/login/" target="_blank" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="https://www.facebook.com/login/?locale=es_ES" target="_blank" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="https://twitter.com/login" target="_blank" role="button">
                        <i className="bi bi-twitter-x"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="https://www.linkedin.com/login" target="_blank" role="button">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </section>
            </div>

            <div className="text-center p-3 small">
                &copy; 2026 RecycleWare. Todos los derechos reservados.
            </div>
        </footer>
    );
}