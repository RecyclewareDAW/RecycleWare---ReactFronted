import Footer from '../components/Footer';
import Header from '../components/Header';
import FormLogin from '../components/Session/FormLogin';

const Login = () => {
    return (
        <>
            <div
                data-bs-spy="scroll"
                data-bs-target=".navbar"
                data-bs-smooth-scroll="true"
                tabIndex={0}
            >
                <div className="d-flex flex-column min-vh-100">
                    <Header />
                </div>

                <main className='flex-grow-1'>
                    <p>fdsfdsfdsff</p>
                    <p>fdsfdsfdsff</p>
                    <p>fdsfdsfdsff</p>
                    <p>fdsfdsfdsff</p>
                    <p>fdsfdsfdsff</p>
                    <p>fdsfdsfdsff</p>
                    
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Login;