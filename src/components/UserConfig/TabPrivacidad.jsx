export default function TabPrivacidad() {
    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Privacidad y Datos</h2>
            <button type="button" className="btn btn-outline-primary mb-3 d-block"><i className="bi bi-download me-2"></i>Descargar mis datos</button>
            <hr className="my-4"/>
            <h5 className="text-danger">Zona de Peligro</h5>
            <button type="button" className="btn btn-outline-danger mt-2">Eliminar mi cuenta</button>
        </div>
    );
}