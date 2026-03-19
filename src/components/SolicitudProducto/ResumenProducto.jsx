import React from 'react';

const ResumenProducto = ({ producto }) => {
  if (!producto) return null;

  // Mapeo dinámico basado en tus 4 estados de la base de datos
  const obtenerConfiguracionEstado = (idEstado) => {
    switch (idEstado) {
      case 1: // Excelente
        return { claseBg: "bg-success", icono: "bi-stars" };
      case 2: // Funcional
        return { claseBg: "bg-info", icono: "bi-check-circle-fill" };
      case 3: // Dañado
        return { claseBg: "bg-warning", icono: "bi-exclamation-triangle-fill" };
      case 4: // Para Piezas
        return { claseBg: "bg-danger", icono: "bi-tools" };
      default:
        return { claseBg: "bg-secondary", icono: "bi-question-circle" };
    }
  };

  const config = obtenerConfiguracionEstado(producto.estado?.id);

  return (
    <div className="animate-fade-in h-100 d-flex flex-column">
      <div className="position-relative mb-4">
        <img 
          src={producto.imagenUrl} 
          className="img-fluid rounded-4 shadow-sm w-100 vh-30 object-fit-cover" 
          alt={producto.nombre} 
        />
        <div className="position-absolute top-0 start-0 m-3">
          {/* Aplicamos la clase de fondo y el icono dinámicamente */}
          <span className={`badge ${config.claseBg} shadow-sm px-3 py-2`}>
            <i className={`bi ${config.icono} me-1`}></i> 
            {producto.estado?.nombre || "Disponible"}
          </span>
        </div>
      </div>

      <div className="flex-fill">
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
