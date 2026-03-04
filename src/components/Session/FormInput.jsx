const FormInput = ({label, type, id, placeholder, required}) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input 
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
        />
    </div>
  )
}

export default FormInput;