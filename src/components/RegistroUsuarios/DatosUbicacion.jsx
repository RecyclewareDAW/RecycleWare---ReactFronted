import CustomInput from '../CustomInput';

export default function DatosUbicacion({ tipoPerfil }) {
    return (
        <>
            {tipoPerfil === 'empresa' && (
                <CustomInput
                    id="direccion"
                    label="Dirección"
                    type="text"
                    placeholder="Dirección (Calle, número, nave...)"
                    required={true}
                    hideLabel={true}
                    errorMessage="La dirección es obligatoria para gestionar recogidas."
                />
            )}

            <div className="row g-3">
                <div className="col-md-4">
                    <CustomInput
                        id="cp"
                        label="Código Postal"
                        type="text"
                        placeholder="C. Postal"
                        required={true}
                        hideLabel={true}
                        errorMessage="CP inválido."
                        pattern="[0-9]{5}" // ¡Aquí funciona el ...props!
                        title="Debe contener 5 números"
                    />
                </div>
                <div className="col-md-8">
                    <CustomInput
                        id="provincia"
                        label="Provincia"
                        type="text"
                        placeholder="Provincia / Ciudad"
                        required={true}
                        hideLabel={true}
                        errorMessage="Indica tu provincia."
                    />
                </div>
            </div>
        </>
    );
}
