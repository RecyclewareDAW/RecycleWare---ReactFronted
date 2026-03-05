export default function DatosCuenta() {
    return (
        <>
            <div className="mb-4">
                <label htmlFor="email" className="form-label d-none">Email</label>
                <input
                    type="email"
                    className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                    id="email"
                    placeholder="Correo electrónico"
                    required
                />
                <div className="invalid-feedback">Introduce un correo válido.</div>
            </div>

            <div className="row g-3 mb-4">
                <div className="col-md-6">
                    <label htmlFor="password" className="form-label d-none">Contraseña</label>
                    <input
                        type="password"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="password"
                        placeholder="Contraseña"
                        required
                        minLength="8"
                    />
                    <div className="invalid-feedback">Mínimo 8 caracteres.</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="confirmPassword" className="form-label d-none">Repetir Contraseña</label>
                    <input
                        type="password"
                        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
                        id="confirmPassword"
                        placeholder="Repetir Contraseña"
                        required
                    />
                    <div className="invalid-feedback">Debes confirmar tu contraseña.</div>
                </div>
            </div>
        </>
    );
}