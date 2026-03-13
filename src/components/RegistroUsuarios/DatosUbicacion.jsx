import CustomInput from '../CustomInput';

export default function DatosUbicacion({ tipoPerfil, formData, handleChange }) {

    const localidadesAlicante = [
        { value: 'Alicante Capital', label: 'Alicante Capital' },
        { value: 'San Vicente del Raspeig', label: 'San Vicente del Raspeig' },
        { value: 'San Juan Playa', label: 'San Juan Playa' },
        { value: 'San Juan Pueblo', label: 'San Juan Pueblo' },
        { value: 'Mutxamel', label: 'Mutxamel (Muxamiel)' }
    ];

    return (
        <>
            {tipoPerfil === 'empresa' && (
                <CustomInput
                    id="direccion"
                    label="Dirección"
                    type="text"
                    placeholder="Dirección (Calle, número, piso...)"
                    required={true}
                    hideLabel={true}
                    errorMessage="La dirección es obligatoria para gestionar recogidas."
                    value={formData.direccion}
                    onChange={handleChange}
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
                        pattern="[0-9]{5}"
                        title="Debe contener 5 números"
                        value={formData.cp}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-8">
                    {/* Visualmente pedimos Localidad, pero mantenemos el id="provincia" para que encaje con Java */}
                    <CustomInput
                        id="provincia"
                        label="Localidad"
                        type="select"
                        placeholder="Selecciona tu localidad..."
                        required={true}
                        hideLabel={true}
                        errorMessage="Selecciona una localidad de la lista."
                        options={localidadesAlicante}
                        value={formData.provincia} 
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}
