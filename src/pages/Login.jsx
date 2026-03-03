import Footer from '../components/Footer';
import Header from '../components/Header';

const Login = () => {
    return (
        <>
            <div
            data-bs-spy="scroll"
            data-bs-target=".navbar"
            data-bs-smooth-scroll="true"
            tabIndex={0}
        >
            <div className="d-flex flex-column">
                <Header />
            </div>

            <main>
            
            </main>

            <Footer />
        </div>
        </>
    )
}

export default Login;