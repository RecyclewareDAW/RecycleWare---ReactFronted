const FormCard = ({ title, subtitle, colSize, children }) => {
  return (
    <div className="row justify-content-center">
      {/* Usamos colSize para que el Registro pueda ser más ancho que el Login */}
      <div className={`col-12 ${colSize}`}>
        
        {/* Estilo de la card del formulario */}
        <div className="bg-white py-5 px-4 px-md-5 rounded-4 border shadow-sm">
          <h2 className="titulo">{title}</h2>
          
          {/* Subtítulo opcional */}
          {subtitle && (
            <p className="text-center text-muted mb-4">{subtitle}</p>
          )}

          {/* Aquí dentro se creará el CustomForm, los CustomInput */}
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default FormCard;