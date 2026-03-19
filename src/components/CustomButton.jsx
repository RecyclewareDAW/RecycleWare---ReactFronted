const CustomButton = ({ children, type = "submit", onClick, disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn btn-primary w-100 my-3 rounded-pill shadow-sm"
    >
      {children}
    </button>
  );
};

export default CustomButton;