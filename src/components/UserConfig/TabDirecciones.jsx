export default function TabDirecciones() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Mis Direcciones</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Dirección Completa</label>
                    <input type="text" className="form-control inputs" placeholder="Calle, número, piso..." />
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Ciudad</label>
                        <input type="text" className="form-control inputs" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Código Postal</label>
                        <input type="text" className="form-control inputs" />
                    </div>
                </div>
                <button type="button" className="btn btn-secondary mt-3">Guardar Dirección</button>
            </form>
        </div>
    );
}