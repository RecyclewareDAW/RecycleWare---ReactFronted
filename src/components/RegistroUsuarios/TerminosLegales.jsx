import CustomInput from '../CustomInput';
import { Link } from 'react-router-dom';

export default function TerminosLegales() {
    return (
        <>
            <CustomInput
                id="newsletter"
                type="checkbox"
                label="Quiero recibir correos sobre el impacto de mis donaciones y novedades de RecycleWare. (Opcional)"
                required={false}
            />

            <CustomInput
                id="terminos"
                type="checkbox"
                required={true}
                errorMessage="Debes aceptar los términos y condiciones."
                label={
                    <>
                        Acepto los <Link to="/terminos" target="_blank" rel="noopener noreferrer" className="text-link">términos y condiciones</Link> y la política de privacidad.
                    </>
                }
            />
        </>
    );
}