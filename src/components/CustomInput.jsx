const validationRules = {
  email: {
    pattern: "^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+[.][a-zA-Z]{2,}$",
    maxLength: 80,
    defaultError: "Introduce un correo válido (ej: usuario@dominio.com)."
  },
  dni: {
    pattern: "^([0-9]{8}[A-Za-z]|[XYZxyz][0-9]{7}[A-Za-z])$",
    maxLength: 9,
    defaultError: "Introduce un DNI o NIE válido."
  },
  cif: {
    pattern: "^([ABCDEFGHJNPQRSUVWabcdefghjnpqrsuvw][0-9]{7}[0-9A-Ja-j])$",
    maxLength: 9,
    defaultError: "Introduce un CIF válido."
  },
  telefono: {
    pattern: "^[0-9]{9}$",
    maxLength: 9,
    defaultError: "El teléfono debe tener exactamente 9 cifras."
  },
  cp: {
    pattern: "^[0-9]{5}$",
    maxLength: 5,
    defaultError: "El código postal debe tener 5 números."
  }
};

const CustomInput = ({ id, label, type, placeholder, required, errorMessage, hideLabel, value, onChange, options = [], rule, ...props }) => {

  // si nos pasan el rule "email" obtenemos sus datos
  const appliedRule = validationRules[rule] || {};
  const finalPattern = props.pattern || appliedRule.pattern;
  const finalMaxLength = props.maxLength || appliedRule.maxLength;
  const finalErrorMessage = errorMessage || appliedRule.defaultError;

  //Interceptor para que funcionen bien las validaciones de bootstrap(sobre el correo)
  const handleCustomChange = (e) => {
    // ejecutamos el onChange normal para guardar el dato en React
    if (onChange) onChange(e);

    // tomamos el control absoluto de la validación visual
    const inputValue = e.target.value;
    if (inputValue && finalPattern) {
        const regex = new RegExp(finalPattern);
        if (!regex.test(inputValue)) {
            // si falla la regla pintamos de rojo con la advertencia
            e.target.setCustomValidity("Inválido"); 
        } else {
            // si cumple la regla, pintamos de verde como valido
            e.target.setCustomValidity(""); 
        }
    } else {
        // limpiamos si el campo está vacío (para que el "required" nativo haga su trabajo)
        e.target.setCustomValidity(""); 
    }
  };

  // Si el input es un checkbox 
  if (type === "checkbox") {
    return (
      <div className="form-check mb-3">
        <input
          className="form-check-input terminos"
          type="checkbox"
          id={id}
          name={id}
          required={required}
          onChange={onChange}
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

  if (type === "select") {
    return (
      <div className="w-100 mb-4">
        <label htmlFor={id} className={`form-label fw-bold text-secondary ${hideLabel ? 'd-none' : ''}`}>
          {label}
        </label>
        <select
          className="form-select rounded-0 px-0 shadow-none text-primary inputs"
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
          {...props}
        >
          {/* Opción por defecto deshabilitada que actúa como "Placeholder" */}
          <option value="" disabled>{placeholder}</option>

          {/* Recorremos la lista de opciones que le pasemos */}
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errorMessage}</div>
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
        onChange={handleCustomChange}
        pattern={finalPattern}
        maxLength={finalMaxLength}
        {...props}
      />
      <div className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  )
}

export default CustomInput;