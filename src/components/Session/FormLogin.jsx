import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormCard from '../FormCard';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Esta funcion solo se ejecuta si esta el formulario 100% válido
  const handleSubmit = (e) => {
    console.log("Enviando al servidor...");
    console.log("Email capturado:", email);
    console.log("Contraseña capturada:", password);
  };

  return (
    <FormCard title="Iniciar sesión" colSize="col-lg-6">
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
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