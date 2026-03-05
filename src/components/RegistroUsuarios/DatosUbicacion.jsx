import CustomInput from '../CustomInput';

export default function DatosUbicacion({ tipoPerfil }) {
    return (
        <>
            {tipoPerfil === 'empresa' && (
                <CustomInput
                    id="direccion"
                    label="Dirección"
                    type="text"
                    placeholder="Dirección (Calle, número, nave...)"
                    required={true}
                    hideLabel={true}
                    errorMessage="La dirección es obligatoria para gestionar recogidas."
                />
            )}

            <div className="row g-3">
                <div className="col-md-4">
                    <CustomInput
                        id="cp"
                        label="Código Postal"
                        type="text"
                        placeholder="C. Postal"
                        required={true}
                        hideLabel={true}
                        errorMessage="CP inválido."
                        pattern="[0-9]{5}" // ¡Aquí funciona el ...props!
                        title="Debe contener 5 números"
                    />
                </div>
                <div className="col-md-8">
                    <CustomInput
                        id="provincia"
                        label="Provincia"
                        type="text"
                        placeholder="Provincia / Ciudad"
                        required={true}
                        hideLabel={true}
                        errorMessage="Indica tu provincia."
                    />
                </div>
            </div>
        </>
    );
}


// export default function DatosUbicacion({ tipoPerfil }) {
//     return (
//         <>
//             {tipoPerfil === 'empresa' && (
//                 <div className="mb-4">
//                     <label htmlFor="direccion" className="form-label d-none">Dirección</label>
//                     <input
//                         type="text"
//                         className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                         id="direccion"
//                         placeholder="Dirección (Calle, número, nave...)"
//                         required
//                     />
//                     <div className="invalid-feedback">La dirección es obligatoria para gestionar recogidas.</div>
//                 </div>
//             )}

//             <div className="row g-3 mb-4">
//                 <div className="col-md-4">
//                     <label htmlFor="cp" className="form-label d-none">Código Postal</label>
//                     <input
//                         type="text"
//                         className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                         id="cp"
//                         placeholder="C. Postal"
//                         pattern="[0-9]{5}"
//                         title="Debe contener 5 números"
//                         required
//                     />
//                     <div className="invalid-feedback">CP inválido.</div>
//                 </div>
//                 <div className="col-md-8">
//                     <label htmlFor="provincia" className="form-label d-none">Provincia</label>
//                     <input
//                         type="text"
//                         className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                         id="provincia"
//                         placeholder="Provincia / Ciudad"
//                         required
//                     />
//                     <div className="invalid-feedback">Indica tu provincia.</div>
//                 </div>
//             </div>
//         </>
//     );
// }