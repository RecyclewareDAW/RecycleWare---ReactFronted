import { useState } from 'react';
import CustomInput from './CustomInput';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlerSudmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handlerSudmit}>
        <CustomInput
          id="email"
          label="Correo Electrónico"
          type="email"
          placeholder="ejemplo@email.com"
          required={true}
          // Le pasamos el estado y la función para actualizarlo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <CustomInput
          id="password"
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
      <div>
        <small>
          ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
        </small>
      </div>
    </>

  )
}

export default FormLogin;