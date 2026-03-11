import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomForm from '../CustomForm'; 
import CustomInput from '../CustomInput'; 
import FormCard from '../FormCard';

export default function Contacto() {
  const [enviadoConExito, setEnviadoConExito] = useState(false);

  const handleSubmit = async (event) => {
    // 1. Evitamos que la página se recargue al enviar el formulario
    event.preventDefault();

    // 2. Extraemos los datos gracias a los atributos 'name' de los inputs
    const formData = new FormData(event.target);
    const datosFormulario = Object.fromEntries(formData.entries());

    try {
      // 3. Enviamos la petición POST a nuestro backend en Spring
      const respuesta = await fetch('http://localhost:8080/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          nombre: datosFormulario.nombre,
          correo: datosFormulario.email,   
          mensaje: datosFormulario.asunto  
        })
      });
      
      // 4. Si Spring nos devuelve un OK (201 Created), mostramos el mensaje de éxito
      if (respuesta.ok) {
        setEnviadoConExito(true);
      } else {
        console.error("El servidor devolvió un error al intentar guardar el mensaje.");
      }
      
    } catch (error) {
      console.error("No se pudo conectar con el servidor backend:", error);
    }
  };

  return (
    <div id="contacto" className="container py-5">
      
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
                  name="nombre" 
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
                  name="email" 
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
                name="asunto" 
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
                name="terminos" 
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
                className="btn btn-primary"
              >
                Enviar Mensaje
              </button>
            </div>
          </CustomForm>

        ) : (

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