import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormCard from '../FormCard';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

// usamos la api creada
import { api } from '../../services/api';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');
  const navigate = useNavigate(); // para redirigir al usuario

  // Esta funcion solo se ejecuta si esta el formulario 100% válido
  const handleSubmit = async (e) => {
    setErrorMensaje(''); // limpiamos los errores anteriores que el usuario haya tenido

    try {
        const credenciales = { email, password };
        
        // Lo enviamos al endpoint de Spring Boot
        const respuesta = await api.post('/users/login', credenciales);

        console.log("¡Login Exitoso!", respuesta);

        // Guardamos la sesion del usuario en la memoria del navegador
        localStorage.setItem('usuarioRecycleware', JSON.stringify(respuesta.usuario));

        // Redirigimos al usuario a la pagina principal
        navigate('/');

    } catch (error) {
        // Si el backend nos devuelve un 401 (Error), lo mostramos en pantalla
        console.error("Error al iniciar sesión:", error);
        setErrorMensaje(error.message || "Correo o contraseña incorrectos.");
    }
  };

  return (
    <FormCard title="Iniciar sesión" colSize="col-lg-6">
      {/* mostramos el error en rojo si existe */}
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
          type="email"
          placeholder="Correo electrónico" // Lo cambiamos para que se lea mejor sin label
          required={true}
          hideLabel={true} // Esto oculta el label
          errorMessage="Introduce un correo válido."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMensaje(''); // borramos el mensaje al escribir
          }}
        />

        <CustomInput
          id="password"
          label="Contraseña"
          type="password"
          placeholder="Contraseña" // Lo cambiamos para que se lea mejor sin label
          required={true}
          hideLabel={true} // Esto oculta el label
          errorMessage="La contraseña es obligatoria."
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
      <p className="text-center text-muted small mb-0">
        ¿No tienes cuenta? <Link to="/registro" className="text-link fw-bold">Regístrate aquí</Link>
      </p>
      <p className="text-center text-muted small mb-0">
        ¿Olvidaste tu contraseña? <Link to="/olvide-contrasena" className="text-link fw-bold">
          Recuperar contraseña
        </Link>
      </p>
    </FormCard>
  )
}

export default FormLogin;