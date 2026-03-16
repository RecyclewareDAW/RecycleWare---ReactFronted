import React from 'react';

const ResumenProducto = ({ producto }) => {
  return (
    <div className="animate-fade-in h-100 d-flex flex-column">
      <div className="position-relative mb-4">
        {/* Actualizado a imagen_url */}
        <img 
          src={producto.imagenUrl} // --> producto.imagen_url || producto.imagen esto no porque en spring se pasa json y entra imagenUrl
          className="img-fluid rounded-4 shadow-sm w-100" 
          alt={producto.nombre} 
        />
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge bg-success shadow-sm px-3 py-2">
            {/* Accedemos al nombre dentro del objeto estado */}
            <i className="bi bi-check-circle-fill me-1"></i> {producto.estado?.nombre || "Disponible"}
          </span>
        </div>
      </div>

      <div className="flex-fill">
        {/* Actualizado el .titulo a nombre para que matchee con la base de datos */}
        <h4 className="text-primary mb-3">{producto.nombre}</h4>
        <p className="text-muted lh-base mb-4 small">
            {producto.descripcion}
        </p>
      </div>

      <div className="bg-light p-3 rounded-3 border-start border-secondary border-4 mt-auto">
        <div className="d-flex align-items-center">
          <i className="bi bi-geo-alt-fill text-secondary fs-4 me-3"></i>
          <div>
            <p className="small fw-bold text-uppercase mb-0 text-secondary">
                Punto de recogida
            </p>
            <p className="mb-0 text-dark fw-medium small">IES Doctor Balmis - Alicante</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumenProducto;