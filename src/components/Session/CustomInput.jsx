const FormInput = ({ id, label, type, placeholder, required, errorMessage, hideLabel }) => {
  // Si el input es un checkbox 
  if (type === "checkbox") {
    return (
      <div className="form-check mb-5">
        <input
          className="form-check-input terminos"
          type="checkbox"
          id={id}
          name={id}
          required={required}
        />
        <label className="form-check-label text-muted" htmlFor={id}>
          {label}
        </label>
        {/* Aquí mostramos el mensaje de error de Bootstrap */}
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className="inputs"
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}

export default FormInput;