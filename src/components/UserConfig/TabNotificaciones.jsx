export default function TabNotificaciones() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Notificaciones</h2>
            <div className="form-check form-switch  fs-5">
                <input className="form-check-input" type="checkbox" role="switch" id="notifPedidos" defaultChecked />
                <label className="form-check-label ms-2" htmlFor="notifPedidos">Actualizaciones de mis peticiones/donaciones</label>
            </div>
            <div className="form-check form-switch  fs-5">
                <input className="form-check-input" type="checkbox" role="switch" id="notifNovedades" />
                <label className="form-check-label ms-2" htmlFor="notifNovedades">Novedades y boletín</label>
            </div>
            <button type="button" className="btn btn-primary mt-4">Guardar Preferencias</button>
        </div>
    );
}