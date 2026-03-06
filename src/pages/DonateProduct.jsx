import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCard from '../components/FormCard';
import CustomForm from '../components/CustomForm';
import CustomInput from '../components/CustomInput';

const DonateProduct = () => {
    const navigate = useNavigate();
    const [enviado, setEnviado] = useState(false);

    const [tipoEquipo, setTipoEquipo] = useState('');
    const [marcaModelo, setMarcaModelo] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [confirmacion, setConfirmacion] = useState(false);

    // SIMULACIÓN DE LOGIN
    const isLoggedIn = true; 

    // Protección de ruta
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login'); 
        }
    }, [isLoggedIn, navigate]);

    // Función de envío
    const handleSubmit = () => {
        console.log("Datos de la donación listos para enviar al servidor:");
        console.log({ tipoEquipo, marcaModelo, estado, descripcion, confirmacion });
        setEnviado(true);
    };

    // Si no está logueado, no renderizamos la página para evitar que parpadee
    if (!isLoggedIn) return null;

    // lista de opciones del Select
    const opcionesEquipo = [
        { value: 'portatil', label: 'Portátil (Laptop)' },
        { value: 'sobremesa', label: 'Ordenador de Sobremesa (Torre)' },
        { value: 'monitor', label: 'Monitor / Pantalla' },
        { value: 'periferico', label: 'Periférico (Teclado, Ratón, etc.)' },
        { value: 'otro', label: 'Otro' }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-fill container py-5 d-flex align-items-center justify-content-center">
                <FormCard 
                    title={!enviado ? "Donar Equipo" : ""} 
                    subtitle={!enviado ? "Completa los detalles del dispositivo que deseas donar para darle una segunda vida." : ""}
                    colSize="col-lg-12"
                >
                    {!enviado ? (
                        <CustomForm onSubmit={handleSubmit}>
                            
                            <div className="row g-4 mb-4">
                                <div className="col-md-6">
                                    <CustomInput
                                        id="tipoEquipo"
                                        label="Tipo de equipo"
                                        type="select"
                                        placeholder="Selecciona el tipo de equipo..."
                                        required={true}
                                        hideLabel={true}
                                        errorMessage="Por favor, selecciona qué tipo de equipo vas a donar."
                                        options={opcionesEquipo}
                                        value={tipoEquipo}
                                        onChange={(e) => setTipoEquipo(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <CustomInput
                                        id="marcaModelo"
                                        label="Marca y Modelo"
                                        type="text"
                                        placeholder="Ej: Dell Inspiron 15"
                                        required={true}
                                        hideLabel={true}
                                        errorMessage="Indica la marca y el modelo."
                                        value={marcaModelo}
                                        onChange={(e) => setMarcaModelo(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <CustomInput
                                    id="estado"
                                    label="Estado actual"
                                    type="text"
                                    placeholder="Ej: Enciende pero la pantalla está rota"
                                    required={true}
                                    hideLabel={true}
                                    errorMessage="Describe brevemente el estado."
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <CustomInput
                                    id="descripcion"
                                    label="Detalles adicionales"
                                    type="textarea"
                                    placeholder="Añade otros detalles (años de uso, si incluye cargador, etc.)"
                                    required={false}
                                    hideLabel={true}
                                    rows="3"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>

                            {/* En los checkbox usamos e.target.checked en lugar de value */}
                            <CustomInput
                                id="confirmacion"
                                type="checkbox"
                                required={true}
                                errorMessage="Debes confirmar que el equipo es tuyo."
                                label="Confirmo que el equipo es de mi propiedad y deseo donarlo a RecycleWare."
                                value={confirmacion}
                                onChange={(e) => setConfirmacion(e.target.checked)}
                            />

                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary text-white px-5 py-2">
                                    Registrar Donación
                                </button>
                            </div>

                        </CustomForm>
                    ) : (
                        <div className="alert alert-success text-center">
                            <h4 className="alert-heading mb-3">
                                <i className="bi bi-heart-fill me-2 text-success"></i>
                                ¡Gracias por tu donación!
                            </h4>
                            <p className="mb-4">
                                Hemos registrado tu equipo correctamente. Te hemos enviado un correo electrónico con las instrucciones para acercarlo a nuestro punto de recogida.
                            </p>
                            <button 
                                className="btn btn-outline-success" 
                                onClick={() => setEnviado(false)} 
                            >
                                Donar otro equipo
                            </button>
                        </div>
                    )}
                </FormCard>
            </main>

            <Footer />
        </div>
    );
};

export default DonateProduct;