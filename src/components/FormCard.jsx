const FormCard = ({ title, subtitle, colSize, children }) => {
  return (
    <div className="row justify-content-center">
      
      <div className={`col-12 ${colSize}`}>
        
        <div className="bg-white py-5 px-4 px-md-5 rounded-4 border shadow-sm">
          <h2 className="titulo">{title}</h2>
          
        
          {subtitle && (
            <p className="text-center text-muted mb-4">{subtitle}</p>
          )}

          
          {children}
          
        </div>
      </div>
    </div>
  );
};

export default FormCard;