export default function TerminosLegales() {
    return (
        <>
            <div className="form-check g-4 mb-4">
                <input className="form-check-input terminos" type="checkbox" id="newsletter" />
                <label className="form-check-label text-muted small" htmlFor="newsletter">
                    Quiero recibir correos sobre el impacto de mis donaciones y novedades de RecycleWare. (Opcional)
                </label>
            </div>

            <div className="form-check mb-4">
                <input className="form-check-input terminos" type="checkbox" id="terminos" required />
                <label className="form-check-label text-muted small" htmlFor="terminos">
                    Acepto los <a href="#" className="text-link">términos y condiciones</a> y la política de privacidad.
                </label>
                <div className="invalid-feedback">Debes aceptar los términos.</div>
            </div>
        </>
    );
}