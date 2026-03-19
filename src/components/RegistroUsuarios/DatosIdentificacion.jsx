import CustomInput from '../CustomInput';

export default function DatosIdentificacion({ tipoPerfil, formData, handleChange }) {
    return (
        <>
            <CustomInput
                id="nombre"
                label={tipoPerfil === 'particular' ? 'Nombre completo' : 'Nombre de la empresa'}
                type="text"
                placeholder={tipoPerfil === 'particular' ? 'Nombre completo' : 'Nombre de la empresa'}
                required={true}
                hideLabel={true}
                errorMessage="Este campo es obligatorio."
                value={formData.nombre}
                onChange={handleChange}
            />

            {tipoPerfil === 'empresa' && (
                <CustomInput
                    id="personaContacto"
                    label="Persona de contacto"
                    type="text"
                    placeholder="Nombre de la persona de contacto"
                    required={true}
                    hideLabel={true}
                    errorMessage="Indica una persona de contacto."
                    value={formData.personaContacto}
                    onChange={handleChange}
                />
            )}

            <div className="row g-3">
                <div className="col-md-6">
                    <CustomInput
                        id="documento"
                        label={tipoPerfil === 'particular' ? 'DNI / NIE' : 'CIF'}
                        type="text"
                        placeholder={tipoPerfil === 'particular' ? 'DNI / NIE' : 'CIF'}
                        required={true}
                        hideLabel={true}
                        rule={tipoPerfil === 'particular' ? 'dni' : 'cif'}
                        value={formData.documento}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <CustomInput
                        id="telefono"
                        label={'Teléfono'}
                        type="tel"
                        placeholder={'Teléfono'}
                        required={true}
                        hideLabel={true}
                        rule="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}
