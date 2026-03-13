import { useState } from 'react';
import CustomForm from '../CustomForm'; 
import CustomInput from '../CustomInput';

export default function TabDirecciones() {

    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');

    const handleGuardarDireccion = (e) => {

        console.log('Dirección guardada:', { direccion, ciudad, codigoPostal });

    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Mis Direcciones</h2>
            
            <CustomForm onSubmit={handleGuardarDireccion}>
                
                <CustomInput
                    id="direccionCompleta"
                    label="Dirección Completa"
                    type="text"
                    placeholder="Calle, número, piso..."
                    required={true}
                    errorMessage="Por favor, introduce tu dirección completa."
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />

                <div className="row">
                    <div className="col-md-6">

                        <CustomInput
                            id="ciudad"
                            label="Provincia / Ciudad"
                            type="text"
                            placeholder="Ej: Madrid"
                            required={true}
                            errorMessage="La ciudad es obligatoria."
                            value={ciudad}
                            onChange={(e) => setCiudad(e.target.value)}
                        />
                    </div>
                    
                    <div className="col-md-6">

                        <CustomInput
                            id="codigoPostal"
                            label="Código Postal"
                            type="text"
                            placeholder="Ej: 28001"
                            required={true}
                            errorMessage="El código postal es obligatorio."
                            pattern="[0-9]{5}"
                            value={codigoPostal}
                            onChange={(e) => setCodigoPostal(e.target.value)}
                        />
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        Guardar Dirección
                    </button>
                </div>
                
            </CustomForm>
        </div>
    );
}


// export default function TabDirecciones() {
//     return (
//         <div className="animate-fade-in">
//             <h2 className="titulo">Mis Direcciones</h2>
//             <form>
//                 <div className="mb-3">
//                     <label className="form-label">Dirección Completa</label>
//                     <input type="text" className="form-control inputs" placeholder="Calle, número, piso..." />
//                 </div>
//                 <div className="row mb-3">
//                     <div className="col-md-6">
//                         <label className="form-label">Ciudad</label>
//                         <input type="text" className="form-control inputs" />
//                     </div>
//                     <div className="col-md-6">
//                         <label className="form-label">Código Postal</label>
//                         <input type="text" className="form-control inputs" />
//                     </div>
//                 </div>
//                 <button type="button" className="btn btn-primary mt-3">Guardar Dirección</button>
//             </form>
//         </div>
//     );
// }