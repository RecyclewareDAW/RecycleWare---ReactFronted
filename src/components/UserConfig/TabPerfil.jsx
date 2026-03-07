import { useState } from 'react';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';

export default function TabPerfil({ userRole, setActiveTab }) {
    // ESTADOS PARA PARTICULARES
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [dni, setDni] = useState(''); // <-- Nuevo estado para el DNI/NIE
    const [telefonoIndividual, setTelefonoIndividual] = useState('');
    const [correoIndividual, setCorreoIndividual] = useState('');

    // ESTADOS PARA EMPRESAS
    const [razonSocial, setRazonSocial] = useState('');
    const [cif, setCif] = useState('');
    const [personaContacto, setPersonaContacto] = useState('');
    const [correoEmpresa, setCorreoEmpresa] = useState('');
    const [telefonoPrincipal, setTelefonoPrincipal] = useState('');
    const [telefonoSecundario, setTelefonoSecundario] = useState('');

    const handleGuardarPerfil = (e) => {
        // e.preventDefault() ya está en CustomForm
        if (userRole === 'individual') {
            console.log('Guardando particular:', { nombre, apellidos, dni, telefonoIndividual, correoIndividual });
        } else {
            console.log('Guardando empresa:', { razonSocial, cif, personaContacto, correoEmpresa, telefonoPrincipal, telefonoSecundario });
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo mb-4">
                {userRole === 'individual' ? 'Datos Personales' : 'Datos de la Empresa'}
            </h2>
            
            <CustomForm onSubmit={handleGuardarPerfil}>
                {userRole === 'individual' ? (
                    // -----------------------------------------
                    //        FORMULARIO PARA PARTICULARES
                    // -----------------------------------------
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput 
                                    id="nombre"
                                    label="Nombre"
                                    type="text"
                                    placeholder="Tu nombre"
                                    required={true}
                                    errorMessage="El nombre es obligatorio."
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput 
                                    id="apellidos"
                                    label="Apellidos"
                                    type="text"
                                    placeholder="Tus apellidos"
                                    required={true}
                                    errorMessage="Los apellidos son obligatorios."
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput 
                                    id="dni"
                                    label="DNI / NIE"
                                    type="text"
                                    placeholder="Ej: 12345678A"
                                    required={true}
                                    errorMessage="El DNI o NIE es obligatorio."
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput 
                                    id="telefonoIndividual"
                                    label="Teléfono de contacto"
                                    type="tel"
                                    placeholder="Tu número de teléfono"
                                    required={true}
                                    errorMessage="Añade un teléfono válido."
                                    value={telefonoIndividual}
                                    onChange={(e) => setTelefonoIndividual(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {/* El correo lo dejamos en su propia fila, ocupando la mitad (col-md-6) o todo (col-12) según prefieras. Aquí lo dejo en la mitad para seguir el estilo. */}
                            <div className="col-md-6">
                                <CustomInput 
                                    id="correoIndividual"
                                    label="Correo Electrónico"
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    required={true}
                                    errorMessage="Introduce un correo válido."
                                    value={correoIndividual}
                                    onChange={(e) => setCorreoIndividual(e.target.value)}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    // -----------------------------------------
                    //          FORMULARIO PARA EMPRESAS
                    // -----------------------------------------
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput 
                                    id="razonSocial"
                                    label="Razón Social"
                                    type="text"
                                    placeholder="Nombre legal de la empresa"
                                    required={true}
                                    errorMessage="La razón social es obligatoria."
                                    value={razonSocial}
                                    onChange={(e) => setRazonSocial(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput 
                                    id="cif"
                                    label="CIF"
                                    type="text"
                                    placeholder="B-12345678"
                                    required={true}
                                    errorMessage="El CIF es obligatorio."
                                    value={cif}
                                    onChange={(e) => setCif(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput 
                                    id="personaContacto"
                                    label="Persona de contacto"
                                    type="text"
                                    placeholder="Nombre de la persona encargada"
                                    required={true}
                                    errorMessage="Indica una persona de contacto."
                                    value={personaContacto}
                                    onChange={(e) => setPersonaContacto(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput 
                                    id="correoEmpresa"
                                    label="Correo Electrónico"
                                    type="email"
                                    placeholder="correo@empresa.com"
                                    required={true}
                                    errorMessage="Introduce un correo válido."
                                    value={correoEmpresa}
                                    onChange={(e) => setCorreoEmpresa(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <CustomInput 
                                    id="telefonoPrincipal"
                                    label="Teléfono principal"
                                    type="tel"
                                    placeholder="Teléfono principal"
                                    required={true}
                                    errorMessage="El teléfono principal es obligatorio."
                                    value={telefonoPrincipal}
                                    onChange={(e) => setTelefonoPrincipal(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <CustomInput 
                                    id="telefonoSecundario"
                                    label={<>Teléfono secundario <span className="text-muted fw-normal fs-6">(Opcional)</span></>}
                                    type="tel"
                                    placeholder="Teléfono alternativo"
                                    required={false}
                                    value={telefonoSecundario}
                                    onChange={(e) => setTelefonoSecundario(e.target.value)}
                                />
                            </div>
                        </div>
                    </>
                )}

                {/* BOTÓN SUBMIT (Aplica para ambos formularios) */}
                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        Guardar Cambios
                    </button>
                </div>
            </CustomForm>

            {/* SECCIÓN: RESUMEN DE DONACIONES (SOLO EMPRESAS) */}
            {userRole === 'empresa' && (
                <div className="mt-5 pt-2 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
                        <h3 className="mb-0 fw-bold text-primary titulo-secundario">
                            Últimas Donaciones
                        </h3>
                        <button 
                            type="button"
                            className="btn btn-sm btn-link text-secondary text-decoration-none fw-bold p-0"
                            onClick={() => setActiveTab('donaciones')}
                        >
                            Ver todas <i className="bi bi-arrow-right"></i>
                        </button>
                    </div>
                    
                    <div className="d-flex flex-column gap-3">
                        <div className="p-3 rounded-3 d-flex justify-content-between align-items-center card-soft-bg">
                            <div>
                                <h6 className="mb-1 fw-bold text-dark">Lote de 10 Monitores Dell 24"</h6>
                                <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>28 Feb 2026</small>
                            </div>
                            <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill">
                                Completado
                            </span>
                        </div>
                        <div className="p-3 rounded-3 d-flex justify-content-between align-items-center card-soft-bg">
                            <div>
                                <h6 className="mb-1 fw-bold text-dark">5 Portátiles HP ProBook</h6>
                                <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>15 Feb 2026</small>
                            </div>
                            <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-2 py-1 rounded-pill">
                                En Taller
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


// export default function TabPerfil({ userRole, setActiveTab }) {
//     return (
//         <div className="animate-fade-in">
//             <h2 className="titulo">
//                 {userRole === 'individual' ? 'Datos Personales' : 'Datos de la Empresa'}
//             </h2>
            
//             <form>
//                 {userRole === 'individual' ? (
//                     // -----------------------------------------
//                     //        FORMULARIO PARA PARTICULARES
//                     // -----------------------------------------
//                     <>
//                         <div className="row mb-3">
//                             <div className="col-md-6">
//                                 <label className="form-label">Nombre</label>
//                                 <input type="text" className="form-control inputs" placeholder="Tu nombre" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="form-label">Apellidos</label>
//                                 <input type="text" className="form-control inputs" placeholder="Tus apellidos" />
//                             </div>
//                         </div>
//                         <div className="row mb-4">
//                             <div className="col-md-6">
//                                 <label className="form-label">Teléfono de contacto</label>
//                                 <input type="tel" className="form-control inputs" placeholder="Tu número de teléfono" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="form-label">Correo Electrónico</label>
//                                 <input type="email" className="form-control inputs" placeholder="tucorreo@ejemplo.com" />
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     // -----------------------------------------
//                     //          FORMULARIO PARA EMPRESAS
//                     // -----------------------------------------
//                     <>
//                         <div className="row mb-3">
//                             <div className="col-md-6">
//                                 <label className="form-label">Razón Social</label>
//                                 <input type="text" className="form-control inputs" placeholder="Nombre legal de la empresa" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="form-label">CIF</label>
//                                 <input type="text" className="form-control inputs" placeholder="B-12345678" />
//                             </div>
//                         </div>
                        
//                         <div className="row mb-3">
//                             <div className="col-md-6">
//                                 <label className="form-label">Persona de contacto</label>
//                                 <input type="text" className="form-control inputs" placeholder="Nombre de la persona encargada" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="form-label">Correo Electrónico</label>
//                                 <input type="email" className="form-control inputs" placeholder="correo@empresa.com" />
//                             </div>
//                         </div>

//                         <div className="row mb-4">
//                             <div className="col-md-6">
//                                 <label className="form-label">Teléfono principal</label>
//                                 <input type="tel" className="form-control inputs" placeholder="Teléfono principal" />
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="form-label">Teléfono secundario <span className="text-muted fw-normal fs-6">(Opcional)</span></label>
//                                 <input type="tel" className="form-control inputs" placeholder="Teléfono alternativo" />
//                             </div>
//                         </div>
//                     </>
//                 )}

//                 <button type="button" className="btn btn-primary mb-4">Guardar Cambios</button>
//             </form>

//             {/* SECCIÓN: RESUMEN DE DONACIONES (SOLO EMPRESAS) */}
//             {userRole === 'empresa' && (
//                 <div className="mt-5 pt-2 border-top">
//                     <div className="d-flex justify-content-between align-items-center mb-4 mt-4">
//                         <h3 className="mb-0 fw-bold text-primary titulo-secundario">
//                             Últimas Donaciones
//                         </h3>
//                         <button 
//                             type="button"
//                             className="btn btn-sm btn-link text-secondary text-decoration-none fw-bold p-0"
//                             onClick={() => setActiveTab('donaciones')}
//                         >
//                             Ver todas <i className="bi bi-arrow-right"></i>
//                         </button>
//                     </div>
                    
//                     <div className="d-flex flex-column gap-3">
//                         <div className="p-3 rounded-3 d-flex justify-content-between align-items-center card-soft-bg">
//                             <div>
//                                 <h6 className="mb-1 fw-bold text-dark">Lote de 10 Monitores Dell 24"</h6>
//                                 <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>28 Feb 2026</small>
//                             </div>
//                             <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 rounded-pill">
//                                 Completado
//                             </span>
//                         </div>
//                         <div className="p-3 rounded-3 d-flex justify-content-between align-items-center card-soft-bg">
//                             <div>
//                                 <h6 className="mb-1 fw-bold text-dark">5 Portátiles HP ProBook</h6>
//                                 <small className="text-muted d-block"><i className="bi bi-calendar3 me-2"></i>15 Feb 2026</small>
//                             </div>
//                             <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-2 py-1 rounded-pill">
//                                 En Taller
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }