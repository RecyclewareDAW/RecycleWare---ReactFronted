import { useState } from 'react';

const CustomForm = ({ onSubmit, children }) => {
  // Estado para controlar si mostramos los errores en rojo o no
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true); 
    } else {
      onSubmit(event);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleFormSubmit}
      className={`needs-validation ${validated ? 'was-validated' : ''}`}
    >
      {children}
    </form>
  );
};

export default CustomForm;