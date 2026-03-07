export default function Footer() {
    return (
        <footer className="text-center text-light bg-dark">
            <div className="container p-4 pb-0">

                <section className="mb-3 d-flex flex-wrap justify-content-center gap-3 small ">
                    <span><strong>Colaboradores:</strong> Empresa A | Asociación B | Org C</span>
                    <span><strong>Contacto:</strong> contacto@miweb.com | +34 600 000 000 | Madrid</span>
                </section>

                <section>
                    <a className="btn btn-outline-secondary rounded-circle m-1" href="#!" role="button">
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="#!" role="button">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="#!" role="button">
                        <i className="bi bi-twitter-x"></i>
                    </a>

                    <a className="btn btn-outline-secondary rounded-circle m-1" href="#!" role="button">
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