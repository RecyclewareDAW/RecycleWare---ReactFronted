import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonacionIdentificada from '../components/Donations/RegisteredDonation';
import DonacionAnonima from '../components/Donations/AnonymousDonations';

const DonateProduct = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuarioRecycleware');

        if (usuarioGuardado) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-fill container py-5 d-flex align-items-center justify-content-center">

                {isLoggedIn ? (
                    <DonacionIdentificada />
                ) : (
                    <DonacionAnonima />
                )}

            </main>

            <Footer />
        </div>
    );
};

export default DonateProduct;