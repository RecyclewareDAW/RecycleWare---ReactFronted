export default function Footer() {
    return (
        <footer className="text-center text-light bg-dark">
            <div className="container p-4 pb-0">

                <section className="mb-3 d-flex flex-wrap justify-content-center gap-5 small ">
                    <span><strong>Colaboradores:</strong> Empresa A | Asociación B | Org C</span>
                    <span><strong>Contacto:</strong> recyclewareorg@gmail.com | +34 679 455 550 | Alicante</span>
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