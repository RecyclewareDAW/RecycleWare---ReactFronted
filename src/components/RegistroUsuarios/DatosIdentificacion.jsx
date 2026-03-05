export default function DatosIdentificacion({ tipoPerfil }) {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="nombre" className="form-label d-none">
                    {tipoPerfil === 'particular' ? 'Nombre completo' : 'Nombre de la empresa'}
                </label>
                <input
                    type="text"
                    className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                    id="nombre"
                    placeholder={tipoPerfil === 'particular' ? 'Nombre completo' : 'Nombre de la empresa'}
                    required
                />
                <div className="invalid-feedback">Este campo es obligatorio.</div>
            </div>

            {tipoPerfil === 'empresa' && (
                <div className="mb-4">
                    <label htmlFor="personaContacto" className="form-label d-none">Persona de contacto</label>
                    <input
                        type="text"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="personaContacto"
                        placeholder="Nombre de la persona de contacto"
                        required
                    />
                    <div className="invalid-feedback">Indica una persona de contacto.</div>
                </div>
            )}

            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <label htmlFor="documento" className="form-label d-none">
                        {tipoPerfil === 'particular' ? 'DNI / NIE' : 'CIF'}
                    </label>
                    <input
                        type="text"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="documento"
                        placeholder={tipoPerfil === 'particular' ? 'DNI / NIE' : 'CIF'}
                        required
                    />
                    <div className="invalid-feedback">
                        Por favor, introduce el {tipoPerfil === 'particular' ? 'DNI' : 'CIF'}.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label d-none">
                        {tipoPerfil === 'particular' ? 'Teléfono' : 'Teléfono principal'}
                    </label>
                    <input
                        type="tel"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="telefono"
                        placeholder={tipoPerfil === 'particular' ? 'Teléfono' : 'Teléfono principal'}
                        required
                    />
                    <div className="invalid-feedback">Añade un número de contacto válido.</div>
                </div>
            </div>

            {tipoPerfil === 'empresa' && (
                <div className="mb-4">
                    <label htmlFor="telefonoSecundario" className="form-label d-none">Teléfono secundario</label>
                    <input
                        type="tel"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="telefonoSecundario"
                        placeholder="Teléfono secundario (Opcional)"
                    />
                </div>
            )}
        </>
    );
}