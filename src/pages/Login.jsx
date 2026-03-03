import Header from '../components/Header';
import Footer from '../components/Home/Comunidad';

const Login = () => {
    return (
        <>
            <div
                data-bs-spy="scroll"
                data-bs-target=".navbar"
                data-bs-smooth-scroll="true"
                tabIndex={0}
            >
                {/* <div className="d-flex flex-column min-vh-100"> */}
                <Header />
                {/* </div> */}

                <main>
                    <h1>Página de Login</h1>
                    <p>Aquí irá el formulario de inicio de sesión</p>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default Login;