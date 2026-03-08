const CustomButton = ({ children, type = "submit", onClick, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn btn-primary w-100 mt-2 rounded-pill fw-bold shadow-sm"
    >
      {/* children será el texto que pongas dentro del botón Ej: "Entrar", "Registrar", "etc"*/}
      {children}
    </button>
  );
};

export default CustomButton;