import CustomInput from '../CustomInput';

export default function DatosCuenta() {
    return (
        <>
            <CustomInput
                id="emailRegistro"
                label="Email"
                type="email"
                placeholder="Correo electrónico"
                required={true}
                hideLabel={true}
                errorMessage="Introduce un correo válido."
            />

            <div className="row g-3">
                <div className="col-md-6">
                    <CustomInput
                        id="passwordRegistro"
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        required={true}
                        hideLabel={true}
                        errorMessage="Mínimo 8 caracteres."
                        minLength="8" // ¡Aquí funciona el ...props!
                    />
                </div>
                <div className="col-md-6">
                    <CustomInput
                        id="confirmPassword"
                        label="Repetir Contraseña"
                        type="password"
                        placeholder="Repetir Contraseña"
                        required={true}
                        hideLabel={true}
                        errorMessage="Debes confirmar tu contraseña."
                    />
                </div>
            </div>
        </>
    );
}