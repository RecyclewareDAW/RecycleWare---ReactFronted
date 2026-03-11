import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomForm from '../CustomForm'; 
import CustomInput from '../CustomInput'; 
import FormCard from '../FormCard';

export default function Contacto() {
  const [enviadoConExito, setEnviadoConExito] = useState(false);

  const handleSubmit = async (event) => {
    // 1. Extraemos los datos del formulario gracias a los atributos 'name'
    const formData = new FormData(event.target);
    const datosFormulario = Object.fromEntries(formData.entries());

    try {
      // 2. Usamos 'fetch' nativo para enviar el JSON a Spring Boot
      const respuesta = await fetch('http://localhost:8080/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          nombre: datosFormulario.nombre,
          correo: datosFormulario.email,   // Mapeamos 'email' a 'correo'
          mensaje: datosFormulario.asunto  // Pasamos el texto del 'asunto' a 'mensaje'
        })
      });
      
      // 3. Comprobamos si la respuesta del servidor es correcta (código 200-299)
      if (respuesta.ok) {
        const data = await respuesta.json(); 
        console.log("Mensaje guardado en H2 con éxito:", data);
        setEnviadoConExito(true);
      } else {
        console.error("El servidor devolvió un error:", respuesta.status);
      }
      
    } catch (error) {
      console.error("Hubo un error de red al intentar enviar el mensaje:", error);
    }
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