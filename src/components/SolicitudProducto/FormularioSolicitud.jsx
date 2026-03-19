import { useState } from 'react';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import { api } from '../../services/api';

const FormularioSolicitud = ({ usuario, producto, onSuccess }) => {
  
  const [motivo, setMotivo] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  
  const { nombre, dni, correo } = usuario || {};

  const handleSubmit = async (e) => {
    
    setErrorMensaje('');

    try {
     
      const datosSolicitud = {
        idSolicitante: usuario.id,
        idProducto: producto.id,
        motivo: motivo
      };

      
      await api.post('/solicitudes', datosSolicitud);

      if (onSuccess) {
        onSuccess();
      }
      
    } catch (error) {
      setErrorMensaje("Hubo un error al guardar la solicitud. Revisa la conexión.");
      console.error(error);
    }
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <div className="bg-light p-4 rounded-4 mb-4 border border-light">
        <p className="small fw-bold text-secondary mb-3 text-uppercase">Datos del solicitante</p>
        
        {errorMensaje && (
            <div className="alert alert-danger py-2 small mb-3">
                <i className="bi bi-exclamation-triangle-fill me-2"></i> {errorMensaje}
            </div>
        )}

        <div className="row g-3">
          <div className="col-sm-6">
            <label className="small text-muted d-block mb-1">Nombre</label>
            <span className="fw-bold text-primary d-block">{nombre}</span>
          </div>
          <div className="col-sm-6">
            <label className="small text-muted d-block mb-1">DNI / NIE</label>
            <span className="fw-bold text-primary d-block">{dni}</span>
          </div>
          <div className="col-12">
            <label className="small text-muted d-block mb-1">Email de contacto</label>
            <span className="fw-bold text-primary d-block">{correo || email}</span>
          </div>
        </div>
      </div>

      <CustomInput 
        id="motivo" 
        label="¿Para qué necesitas este equipo?" 
        type="textarea" 
        placeholder="Ej: Para mis estudios de programación..." 
        required 
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)} 
      />

      <CustomInput 
        id="confirmacion" 
        label="Confirmo que mis datos son correctos y me comprometo a recoger el equipo en el centro indicado." 
        type="checkbox" 
        required 
      />

      <button type="submit" className="btn btn-primary w-100 my-3">
        Confirmar Reserva
      </button>
    </CustomForm>
  );
};

export default FormularioSolicitud;