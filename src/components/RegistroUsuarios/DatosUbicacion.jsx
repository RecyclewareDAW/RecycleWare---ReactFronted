export default function DatosUbicacion({ tipoPerfil }) {
    return (
        <>
            {tipoPerfil === 'empresa' && (
                <div className="mb-4">
                    <label htmlFor="direccion" className="form-label d-none">Dirección</label>
                    <input
                        type="text"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="direccion"
                        placeholder="Dirección (Calle, número, nave...)"
                        required
                    />
                    <div className="invalid-feedback">La dirección es obligatoria para gestionar recogidas.</div>
                </div>
            )}

            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <label htmlFor="cp" className="form-label d-none">Código Postal</label>
                    <input
                        type="text"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="cp"
                        placeholder="C. Postal"
                        pattern="[0-9]{5}"
                        title="Debe contener 5 números"
                        required
                    />
                    <div className="invalid-feedback">CP inválido.</div>
                </div>
                <div className="col-md-8">
                    <label htmlFor="provincia" className="form-label d-none">Provincia</label>
                    <input
                        type="text"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="provincia"
                        placeholder="Provincia / Ciudad"
                        required
                    />
                    <div className="invalid-feedback">Indica tu provincia.</div>
                </div>
            </div>
        </>
    );
}