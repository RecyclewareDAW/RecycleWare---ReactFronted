import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomForm from '../CustomForm'; 
import CustomInput from '../CustomInput'; 
import FormCard from '../FormCard';

export default function Contacto() {
  const [enviadoConExito, setEnviadoConExito] = useState(false);

  const handleSubmit = (event) => {
    // Si esta función se ejecuta, significa que el formulario es 100% válido.
    setEnviadoConExito(true);
  };

  return (
    <div id="contacto" className="container py-5">
      
      {/* Condicionamos el título para que no salga si el mensaje ya se envió */}
      <FormCard 
        title={!enviadoConExito ? "¡Contacta con nosotros!" : ""} 
        colSize="col-lg-12"
      >
        
        {!enviadoConExito ? (
          
          <CustomForm onSubmit={handleSubmit}>
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <CustomInput
                  id="nombre"
                  label="Nombre"
                  type="text"
                  placeholder="Nombre"
                  required={true}
                  hideLabel={true}
                  errorMessage="Por favor, escribe tu nombre."
                />
              </div>

              <div className="col-md-6">
                <CustomInput
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  required={true}
                  hideLabel={true}
                  errorMessage="Introduce un correo válido."
                />
              </div>
            </div>

            <div className="mb-4">
              <CustomInput
                id="asunto"
                label="Asunto"
                type="textarea"
                placeholder="Asunto"
                required={true}
                hideLabel={true}
                errorMessage="El asunto es obligatorio."
                rows="3" 
              />
            </div>

            <CustomInput
                id="terminos"
                type="checkbox"
                required={true}
                errorMessage="Debes aceptar los términos y condiciones antes de enviar el mensaje."
                label={
                  <>
                    Acepto los <Link to="/terminos" target="_blank" rel="noopener noreferrer" className="text-link">términos y condiciones</Link>
                  </>
    }
/>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary text-white px-5 py-2"
              >
                Enviar Mensaje
              </button>
            </div>
          </CustomForm>

        ) : (

          // Mensaje de éxito se mostrará dentro de la tarjeta blanca
          <div id="mensajeExito" className="alert alert-success text-center">
            <h4 className="alert-heading mb-3">
              <i className="bi bi-check-circle-fill me-2"></i>
              ¡Mensaje enviado!
            </h4>
            <p className="mb-4">
              Gracias por contactar con nosotros. Hemos recibido tus datos correctamente
              y nos pondremos en contacto contigo pronto.
            </p>
            <button 
              className="btn btn-outline-success" 
              onClick={() => setEnviadoConExito(false)} 
            >
              Enviar otro mensaje
            </button>
          </div>
          
        )}

      </FormCard>
    </div>
  );
}


// import { useState } from 'react'; // Hook de useState

// export default function Contacto() {

//   const [validated, setValidated] = useState(false);
//   const [enviadoConExito, setEnviadoConExito] = useState(false);

//   const handleSubmit = (event) => {

//     event.preventDefault();
    
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.stopPropagation();
//       setValidated(true); 
//     } else {
//       setEnviadoConExito(true);
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div id="contacto" className="bg-white py-4 px-4 rounded-4 border shadow-sm">
//         <h2 className="mb-5 titulo">¡Contacta con nosotros!</h2>

//         {!enviadoConExito ? (
//           <form
//             id="miFormulario"
//             noValidate 
//             onSubmit={handleSubmit}
//             className={`needs-validation ${validated ? 'was-validated' : ''}`}
//           >
//             <div className="row g-4 mb-4">
//               <div className="col-md-6">
//                 <label htmlFor="nombre" className="form-label d-none">
//                   Nombre
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                   id="nombre"
//                   name="nombre"
//                   placeholder="Nombre"
//                   required
//                 />
//                 <div className="invalid-feedback">
//                   Por favor, escribe tu nombre.
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <label htmlFor="email" className="form-label d-none">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   required
//                 />
//                 <div className="invalid-feedback">
//                   Introduce un correo válido.
//                 </div>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label htmlFor="asunto" className="form-label d-none">
//                 Asunto
//               </label>
//               <textarea
//                 className="form-control rounded-0 px-0 shadow-none text-primary inputs"
//                 id="asunto"
//                 name="asunto"
//                 rows="2"
//                 placeholder="Asunto"
//                 required
//               ></textarea>
//               <div className="invalid-feedback">
//                 El asunto es obligatorio.
//               </div>
//             </div>

//             <div className="form-check mb-5">
//               <input
//                 className="form-check-input terminos"
//                 type="checkbox"
//                 id="terminos"
//                 name="terminos"
//                 required
//               />
//               <label
//                 className="form-check-label text-muted"
//                 htmlFor="terminos"
//               >
//                 Acepto los{" "}
//                 <a href="#" className="text-link">
//                   términos y condiciones
//                 </a>
//               </label>
//               <div className="invalid-feedback">
//                 Debes aceptar los términos y condiciones antes de enviar el mensaje.
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="btn btn-primary text-white px-4 py-2"
//               >
//                 Enviar Mensaje
//               </button>
//             </div>
//           </form>
//         ) : (

//           <div
//             id="mensajeExito"
//             className="alert alert-success text-center mt-4"
//           >
//             <h4 className="alert-heading">
//               <i className="bi bi-check-circle-fill me-2"></i>
//               ¡Mensaje enviado!
//             </h4>
//             <p className="mb-0">
//               Gracias por contactar con nosotros. Hemos recibido tus datos correctamente
//               y nos pondremos en contacto contigo pronto.
//             </p>
//             <button 
//               className="btn btn-outline-success mt-3" 
//               onClick={() => { setEnviadoConExito(false); setValidated(false); }}
//             >
//               Enviar otro mensaje
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }