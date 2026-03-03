const FormInput = ({label, type, id, placeholder, required}) => {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="">{label}</label>
        <input 
            type={type}
            className=""
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
        />
    </div>
  )
}

export default FormInput;