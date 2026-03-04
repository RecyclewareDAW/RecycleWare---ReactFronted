export default function TabFiscal() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Datos Fiscales</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Razón Social</label>
                    <input type="text" className="form-control inputs" />
                </div>
                <div className="mb-3">
                    <label className="form-label">CIF</label>
                    <input type="text" className="form-control inputs" />
                </div>
                <button type="button" className="btn btn-secondary mt-3">Guardar Datos Fiscales</button>
            </form>
        </div>
    );
}