export default function TabSeguridad() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Seguridad</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Contraseña Actual</label>
                    <input type="password" className="form-control inputs" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nueva Contraseña</label>
                    <input type="password" className="form-control inputs" />
                </div>
                <button type="button" className="btn btn-secondary mt-3">Actualizar Contraseña</button>
            </form>
        </div>
    );
}