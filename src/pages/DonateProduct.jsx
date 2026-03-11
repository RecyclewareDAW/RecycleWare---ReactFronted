import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonacionIdentificada from '../components/Donations/RegisteredDonation';
import DonacionAnonima from '../components/Donations/AnonymousDonations';

const DonateProduct = () => {
    
    // SIMULACIÓN: Cambia esto entre 'true' o 'false' para probar ambas pantallas
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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