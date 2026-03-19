import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import FormCard from '../FormCard';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const [exitoMensaje, setExitoMensaje] = useState(location.state?.mensajeExito || '');

  const handleSubmit = async (e) => {
    
    if (e && e.preventDefault) e.preventDefault();

    setErrorMensaje('');
    setExitoMensaje('');

    try {
      
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const respuesta = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await respuesta.json();

      if (respuesta.ok && data) {
        localStorage.removeItem('usuarioRecycleware');

        const usuarioAGuardar = data.id ? data : { email: email, nombre: data.nombre || 'Usuario' };

        localStorage.setItem('usuarioRecycleware', JSON.stringify(usuarioAGuardar));

        const rutaDestino = location.state?.from || '/';

        window.location.href = rutaDestino;

      } else {
        setErrorMensaje(data.error || "Correo o contraseña incorrectos.");
      }

    } catch (error) {
      console.error("Error en login:", error);
      setErrorMensaje("No se pudo conectar con el servidor.");
    }
  };

  return (
    <FormCard title="Iniciar sesión" colSize="col-lg-6">
      {exitoMensaje && (
        <div className="alert alert-success text-center fw-bold shadow-sm">
          <i className="bi bi-check-circle-fill me-2"></i>
          {exitoMensaje}
        </div>
      )}

      {errorMensaje && (
        <div className="alert alert-danger text-center fw-bold">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {errorMensaje}
        </div>
      )}

      <CustomForm onSubmit={handleSubmit}>
        <CustomInput
          id="email"
          label="Correo Electrónico"
          type="text"
          placeholder="Correo electrónico"
          required={true}
          hideLabel={true}
          rule="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMensaje('');
          }}
        />

        <CustomInput
          id="password"
          label="Contraseña"
          type="password"
          placeholder="Contraseña"
          required={true}
          hideLabel={true}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMensaje('');
          }}
        />

        <CustomButton type="submit">
          Iniciar Sesión
        </CustomButton>
      </CustomForm>

      <div className="text-center mt-3">
        <p className="text-muted small mb-1">
          ¿No tienes cuenta? <Link to="/registro" className="text-link fw-bold">Regístrate aquí</Link>
        </p>
        <p className="text-muted small">
         <Link to="/olvide-contrasena" className="text-link fw-bold">No recuerdo la contraseña</Link>
        </p>
      </div>
    </FormCard>
  );
}

export default FormLogin;