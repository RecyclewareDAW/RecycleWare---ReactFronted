import { useState } from 'react'; // Hook de useState

export default function Contacto() {

  const [validated, setValidated] = useState(false);
  const [enviadoConExito, setEnviadoConExito] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();
    
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); 
    } else {
      setEnviadoConExito(true);
    }
  };

  return (
    <div className="container py-5">
      <div id="contacto" className="bg-white py-4 px-4 rounded-4 border shadow-sm">
        <h2 className="mb-5 titulo">¡Contacta con nosotros!</h2>

        {!enviadoConExito ? (
          <form
            id="miFormulario"
            noValidate 
            onSubmit={handleSubmit}
            className={`needs-validation ${validated ? 'was-validated' : ''}`}
          >
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label htmlFor="nombre" className="form-label d-none">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control rounded-0 px-0 shadow-none text-primary"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  required
                />
                <div className="invalid-feedback">
                  Por favor, escribe tu nombre.
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label d-none">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-0 px-0 shadow-none text-primary"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <div className="invalid-feedback">
                  Introduce un correo válido.
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="asunto" className="form-label d-none">
                Asunto
              </label>
              <textarea
                className="form-control rounded-0 px-0 shadow-none text-primary"
                id="asunto"
                name="asunto"
                rows="2"
                placeholder="Asunto"
                required
              ></textarea>
              <div className="invalid-feedback">
                El asunto es obligatorio.
              </div>
            </div>

            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                id="terminos"
                name="terminos"
                required
              />
              <label
                className="form-check-label text-muted"
                htmlFor="terminos"
              >
                Acepto los{" "}
                <a href="#" className="text-link">
                  términos y condiciones
                </a>
              </label>
              <div className="invalid-feedback">
                Debes aceptar los términos y condiciones antes de enviar el mensaje.
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-primary text-white px-4 py-2"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        ) : (

          <div
            id="mensajeExito"
            className="alert alert-success text-center mt-4"
          >
            <h4 className="alert-heading">
              <i className="bi bi-check-circle-fill me-2"></i>
              ¡Mensaje enviado!
            </h4>
            <p className="mb-0">
              Gracias por contactar con nosotros. Hemos recibido tus datos correctamente
              y nos pondremos en contacto contigo pronto.
            </p>
            <button 
              className="btn btn-outline-success mt-3" 
              onClick={() => { setEnviadoConExito(false); setValidated(false); }}
            >
              Enviar otro mensaje
            </button>
          </div>
        )}
      </div>
    </div>
  );
}