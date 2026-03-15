import { useState } from 'react';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import { api } from '../../services/api';

export default function TabSeguridad() {

    const userSession = JSON.parse(localStorage.getItem('usuarioRecycleware') || '{}');

    const [formKey, setFormKey] = useState(0);
    const [passwordActual, setPasswordActual] = useState('');
    const [nuevaPassword, setNuevaPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });

    const handleActualizarPassword = async () => {
        setMensaje({ tipo: '', texto: '' });

        const passwordGuardada = userSession.password;
        
        if (passwordActual !== passwordGuardada) {
            setMensaje({ tipo: 'danger', texto: 'La contraseña actual no es correcta.' });
            return;
        }

        // Comprobamos que las nuevas contraseñas coincidan
        if (nuevaPassword !== confirmarPassword) {
            setMensaje({ tipo: 'danger', texto: 'Las contraseñas nuevas no coinciden. Revisa lo que has escrito.' });
            return;
        }

        // Preparamos los datos con la nueva contraseña
        const datosActualizados = {
            ...userSession,
            password: nuevaPassword
        };

        try {
            // Mandamos el PUT a Java
            await api.put('/users', datosActualizados);
            
            // Actualizamos el localStorage para que la próxima vez que intente cambiarla, pida la nueva
            localStorage.setItem('usuarioRecycleware', JSON.stringify(datosActualizados));
            
            setMensaje({ tipo: 'success', texto: '¡Tu contraseña se ha actualizado de forma segura!' });
            
            // Limpiamos las cajas de texto por seguridad
            setPasswordActual('');
            setNuevaPassword('');
            setConfirmarPassword('');
            setFormKey(prevKey => prevKey + 1);
            
        } catch (error) {
            setMensaje({ tipo: 'danger', texto: error.message || 'Error al actualizar la contraseña.' });
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="titulo">Seguridad</h2>
            
            {/* Cartel de éxito o error */}
            {mensaje.texto && (
                <div className={`alert alert-${mensaje.tipo} fw-bold`}>
                    {mensaje.tipo === 'success' ? <i className="bi bi-shield-check me-2"></i> : <i className="bi bi-shield-exclamation me-2"></i>}
                    {mensaje.texto}
                </div>
            )}

            <CustomForm key={formKey} onSubmit={handleActualizarPassword}>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <CustomInput 
                            id="passwordActual"
                            label="Contraseña Actual"
                            type="password"
                            placeholder="********"
                            required={true}
                            errorMessage="Por favor, introduce tu contraseña actual."
                            value={passwordActual}
                            onChange={(e) => { setPasswordActual(e.target.value); setMensaje({tipo:'', texto:''}); }}
                        />
                    </div>
                </div>

                <hr className="text-muted opacity-25 mb-4" />

                <div className="row">
                    <div className="col-md-6">
                        <CustomInput 
                            id="nuevaPassword"
                            label="Nueva Contraseña"
                            type="password"
                            placeholder="Mínimo 8 caracteres"
                            required={true}
                            minLength="8"
                            errorMessage="La nueva contraseña debe tener al menos 8 caracteres."
                            value={nuevaPassword}
                            onChange={(e) => { setNuevaPassword(e.target.value); setMensaje({tipo:'', texto:''}); }}
                        />
                    </div>
                    
                    <div className="col-md-6">
                        {/* ✨ El input para confirmar la contraseña */}
                        <CustomInput 
                            id="confirmarPassword"
                            label="Repetir Nueva Contraseña"
                            type="password"
                            placeholder="Mínimo 8 caracteres"
                            required={true}
                            minLength="8"
                            errorMessage="Por favor, repite tu nueva contraseña."
                            value={confirmarPassword}
                            onChange={(e) => { setConfirmarPassword(e.target.value); setMensaje({tipo:'', texto:''}); }}
                        />
                    </div>
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-primary mt-3">
                        <i className="bi bi-shield-lock me-2"></i> Actualizar Contraseña
                    </button>
                </div>

            </CustomForm>
        </div>
    );
}