import { useState } from 'react';

const CustomForm = ({ onSubmit, children }) => {
  // Estado para controlar si mostramos los errores en rojo o no
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evita que la página recargue
    const form = event.currentTarget;

    // Bootstrap comprueba si todos los "required" están completos
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); // Activa la clase 'was-validated' para mostrar el rojo
    } else {
      // Si todo está ok, ejecuta la función de envío que se le pasas desde el Login o Registro
      onSubmit(event);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className={`needs-validation ${validated ? 'was-validated' : ''}`}
    >
      {/* "children" representa a todos los <CustomInput> que pongamos adentro */}
      {children}
    </form>
  );
};

export default CustomForm;