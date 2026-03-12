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
                        errorMessage={`Por favor, introduce el ${tipoPerfil === 'particular' ? 'DNI' : 'CIF'}.`}
                        value={formData.documento}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <CustomInput
                        id="telefono"
                        label={tipoPerfil === 'particular' ? 'Teléfono' : 'Teléfono principal'}
                        type="tel"
                        placeholder={tipoPerfil === 'particular' ? 'Teléfono' : 'Teléfono principal'}
                        required={true}
                        hideLabel={true}
                        errorMessage="Añade un número de contacto válido."
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {tipoPerfil === 'empresa' && (
                <CustomInput
                    id="telefonoSecundario"
                    label="Teléfono secundario"
                    type="tel"
                    placeholder="Teléfono secundario (Opcional)"
                    hideLabel={true}
                    value={formData.telefonoSecundario}
                    onChange={handleChange}
                />
            )}
        </>
    );
}
