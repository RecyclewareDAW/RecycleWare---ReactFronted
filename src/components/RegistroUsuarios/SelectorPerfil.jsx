export default function SelectorPerfil({ tipoPerfil, setTipoPerfil }) {
    return (
        <div className="mb-4 d-flex justify-content-center gap-3">
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="tipoPerfil" 
                    id="perfilParticular" 
                    value="particular"
                    checked={tipoPerfil === 'particular'}
                    onChange={(e) => setTipoPerfil(e.target.value)}
                />
                <label className="form-check-label text-dark" htmlFor="perfilParticular">
                    Particular
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="tipoPerfil" 
                    id="perfilEmpresa" 
                    value="empresa"
                    checked={tipoPerfil === 'empresa'}
                    onChange={(e) => setTipoPerfil(e.target.value)}
                />
                <label className="form-check-label text-dark" htmlFor="perfilEmpresa">
                    Empresa
                </label>
            </div>
        </div>
    );
}