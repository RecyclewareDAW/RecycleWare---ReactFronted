import { useState } from 'react';
import CustomForm from '../CustomForm'; 
import CustomInput from '../CustomInput';
import { api } from '../../services/api';

export default function TabDirecciones() {
    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');

    // Inicializamos con los datos de la base de datos
    const [direccion, setDireccion] = useState(userSession.direccion || '');
    const [localidad, setLocalidad] = useState(userSession.localidad || '');
    const [codigoPostal, setCodigoPostal] = useState(userSession.codigoPostal || '');

    // Estado para los mensajes de éxito/error
    const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

    const localidadesAlicante = [
        { value: 'Alicante', label: 'Alicante' },
        { value: 'San Vicente del Raspeig', label: 'San Vicente del Raspeig' },
        { value: 'San Juan Playa', label: 'San Juan Playa' },
        { value: 'San Juan Pueblo', label: 'San Juan Pueblo' },
        { value: 'Mutxamel', label: 'Mutxamel (Muxamiel)' }
    ];

    const handleGuardarDireccion = async () => {

        setMensaje({ tipo: '', texto: '' });

        const datosActualizados = {
            ...userSession,
            direccion: direccion,
            localidad: localidad,
            codigoPostal: codigoPostal
        };

        try {
            // Enviamos a Java
            await api.put('/users', datosActualizados);
            
            // Actualizamos memoria
            localStorage.setItem('usuarioRecycleware', JSON.stringify(datosActualizados));
            setMensaje({ tipo: 'success', texto: '¡Tu dirección se ha actualizado correctamente!' });
            
        } catch (error) {
            setMensaje({ tipo: 'danger', texto: error.message || 'Error al guardar la dirección.' });
        }

    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Mi Direccion</h2>
            {mensaje.texto && (
                <div className={`alert alert-${mensaje.tipo} fw-bold`}>
                    {mensaje.tipo === 'success' ? <i className="bi bi-check-circle-fill me-2"></i> : <i className="bi bi-exclamation-triangle-fill me-2"></i>}
                    {mensaje.texto}
                </div>
            )}
            <CustomForm onSubmit={handleGuardarDireccion}>
                
                <CustomInput
                    id="direccionCompleta"
                    label="Dirección Completa"
                    type="text"
                    placeholder="Calle, número, piso..."
                    required={true}
                    errorMessage="Por favor, introduce tu dirección completa."
                    value={direccion}
                    onChange={(e) => { setDireccion(e.target.value); setMensaje({tipo:'', texto:''}); }}
                />

                <div className="row">
                    <div className="col-md-6">

                        <CustomInput
                            id="localidad"
                            label="Localidad"
                            type="select"
                            placeholder="Selecciona tu localidad..."
                            required={true}
                            errorMessage="Selecciona una localidad de la lista."
                            options={localidadesAlicante}
                            value={localidad || ""} 
                            onChange={(e) => { setLocalidad(e.target.value); setMensaje({tipo:'', texto:''}); }}
                        />
                    </div>
                    
                    <div className="col-md-6">

                        <CustomInput
                            id="codigoPostal"
                            label="Código Postal"
                            type="text"
                            placeholder="Ej: 03001"
                            required={true}
                            rule="cp"
                            value={codigoPostal}
                            onChange={(e) => { setCodigoPostal(e.target.value); setMensaje({tipo:'', texto:''}); }}
                        />
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        Guardar Dirección
                    </button>
                </div>
                
            </CustomForm>
        </div>
    );
}