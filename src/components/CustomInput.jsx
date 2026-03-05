const CustomInput = ({ id, label, type, placeholder, required, errorMessage, hideLabel, value, onChange }) => {
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
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      </div>
    );
  }

  // Si es un Textarea
  if (type === "textarea") {
    return (
      <div className="w-100 mb-4">
        <label htmlFor={id} className={`form-label text-secondary ${hideLabel ? 'd-none' : ''}`}>
          {label}
        </label>
        <textarea
          className="form-control rounded-0 px-0 shadow-none text-primary inputs"
          id={id}
          name={id}
          rows="2"
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        ></textarea>
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 mb-4">
      <label htmlFor={id} className={`form-label fw-bold text-secondary ${hideLabel ? 'd-none' : ''}`}>{label}</label>
      <input
        className="form-control rounded-0 px-0 shadow-none text-primary inputs"
        id={id}
        type={type}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
      <div className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  )
}

export default CustomInput;