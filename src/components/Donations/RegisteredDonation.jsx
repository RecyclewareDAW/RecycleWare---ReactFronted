import { useState } from 'react';
import FormCard from '../FormCard';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const RegisteredDonation = () => {
    const [enviado, setEnviado] = useState(false);
    
    const [tipoEquipo, setTipoEquipo] = useState('');
    const [marcaModelo, setMarcaModelo] = useState('');
    const [estado, setEstado] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [confirmacion, setConfirmacion] = useState(false);

    const handleSubmit = () => {
        console.log("Datos listos para enviar:", { tipoEquipo, marcaModelo, estado, descripcion, confirmacion });
        setEnviado(true);
    };

    const opcionesEquipo = [
        { value: 'portatil', label: 'Portátil (Laptop)' },
        { value: 'sobremesa', label: 'Ordenador de Sobremesa (Torre)' },
        { value: 'monitor', label: 'Monitor / Pantalla' },
        { value: 'periferico', label: 'Periférico (Teclado, Ratón, etc.)' },
        { value: 'otro', label: 'Otro' }
    ];

    return (
        <FormCard 
            title={!enviado ? "Donar Equipo" : ""} 
            subtitle={!enviado ? "Completa los detalles del dispositivo que deseas donar para darle una segunda vida." : ""}
            colSize="col-lg-8"
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
                                errorMessage="Selecciona qué tipo de equipo vas a donar."
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
                    <CustomInput
                        id="confirmacion"
                        type="checkbox"
                        required={true}
                        errorMessage="Debes confirmar que el equipo es tuyo."
                        label="Confirmo que el equipo es de mi propiedad y deseo donarlo."
                        value={confirmacion}
                        onChange={(e) => setConfirmacion(e.target.checked)}
                    />
                    
                    <div className="text-center">
                        <CustomButton type="submit">
                            Registrar Donación
                        </CustomButton>
                    </div>
                </CustomForm>
            ) : (
                <div className="alert alert-success text-center">
                    <h4 className="alert-heading mb-3">
                        <i className="bi bi-heart-fill me-2 text-success"></i><br/>
                        ¡Gracias por tu donación!
                    </h4>
                    <p className="mb-4">
                        Hemos registrado tu equipo. Revisa tu correo electrónico para las instrucciones de entrega.
                    </p>
                    <CustomButton type="button" onClick={() => setEnviado(false)}>
                        Donar otro equipo
                    </CustomButton>
                </div>
            )}
        </FormCard>
    );
}

export default RegisteredDonation;