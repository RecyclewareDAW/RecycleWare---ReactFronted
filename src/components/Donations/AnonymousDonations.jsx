import { useNavigate } from "react-router-dom";
import FormCard from "../FormCard";
import CustomButton from "../CustomButton";

const AnonymousDonation = () => {
    const navigate = useNavigate();

    return (
        <FormCard title="Donación Puntual" colSize="col-lg-10">
            <div className="text-center mb-4">
                <i className="bi bi-box-seam icono-lg"></i>
            </div>

            <p className="text-muted mb-4">
                Para realizar una donación sin registrarte, simplemente acércate a uno de nuestros <strong>Puntos de Recogida Autorizados</strong> con el equipo que deseas donar.
            </p>

            <div className="bg-light p-3 rounded-3 border-start border-primary border-4 mb-4 text-start">
                <h5 className="text-primary"><i className="bi bi-geo-alt-fill me-2"></i>Punto de recepción:</h5>
                <ul className="text-muted">
                    <li className="mb-2">IES Doctor Balmis - Alicante (L-V 9:00 a 14:00)</li>
                </ul>
            </div>

            <p className="text-center text-dark small mb-4">
                ¿Sabías que si donas como usuario registrado puedes llevar un historial de tus aportaciones y ser reconocido en la plataforma?
            </p>

            <div className="d-flex flex-column flex-md-row gap-3">
                <CustomButton type="button" onClick={() => navigate('/login')}>
                    Iniciar Sesión para Donar
                </CustomButton>
                
                <CustomButton type="button" onClick={() => navigate('/registro')}>
                    Crear una cuenta nueva
                </CustomButton>
            </div>
        </FormCard>
    )
}

export default AnonymousDonation;