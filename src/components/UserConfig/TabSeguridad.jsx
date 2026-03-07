import { useState } from 'react';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';

export default function TabSeguridad() {

    const [passwordActual, setPasswordActual] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');

    const handleActualizarPassword = (e) => {
        // CustomForm ya se encarga del e.preventDefault()
        console.log('Solicitud para cambiar contraseña:', { passwordActual, nuevaPassword });
        
        // Aquí llamaríamos a nuestra base de datos o API para hacer el cambio real
        
        // Opcional: limpiar los campos después de actualizar
        // setPasswordActual('');
        // setNuevaPassword('');
    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo mb-4">Seguridad</h2>
            
            <CustomForm onSubmit={handleActualizarPassword}>

                <div className="row">
                    
                    <div className="col-md-6">
                        <CustomInput 
                            id="passwordActual"
                            label="Contraseña Actual"
                            type="password"
                            placeholder="********"
                            required={true}
                            errorMessage="Por favor, introduce tu contraseña actual."
                            value={passwordActual}
                            onChange={(e) => setPasswordActual(e.target.value)}
                        />
                    </div>

                    <div className="col-md-6">
                        <CustomInput 
                            id="nuevaPassword"
                            label="Nueva Contraseña"
                            type="password"
                            placeholder="Mínimo 8 caracteres"
                            required={true}
                            errorMessage="Debes introducir una nueva contraseña."
                            // pattern=".{8,}" <-- Esto según como configuremos el pattern de la contraseña
                            value={nuevaPassword}
                            onChange={(e) => setNuevaPassword(e.target.value)}
                        />
                    </div>
                    
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        Actualizar Contraseña
                    </button>
                </div>

            </CustomForm>
        </div>
    );
}

// export default function TabSeguridad() {
//     return (
//         <div className="animate-fade-in">
//             <h2 className="titulo">Seguridad</h2>
//             <form>
//                 <div className="mb-3">
//                     <label className="form-label">Contraseña Actual</label>
//                     <input type="password" className="form-control inputs" />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Nueva Contraseña</label>
//                     <input type="password" className="form-control inputs" />
//                 </div>
//                 <button type="button" className="btn btn-primary mt-3">Actualizar Contraseña</button>
//             </form>
//         </div>
//     );
// }