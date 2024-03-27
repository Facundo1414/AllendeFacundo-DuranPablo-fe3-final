import React, { useState } from "react";
import { useTheme } from "./utils/ThemeContext";

const Form = () => {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { theme } = useTheme();

  const formStyle = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-700 text-white';


  function handleSubmit(e) {
    e.preventDefault();

    const { username, email } = e.target.elements;
    let usernameError = validateUsername(username.value);
    let emailError = validateEmail(email.value);

    if (usernameError || emailError) {
      setError(usernameError || emailError);
      setSuccessMessage('');
    } else {
      setError('');
      setSuccessMessage(`Gracias ${username.value}, te contactaremos lo antes posible vía email.`);
    }
  }

  function validateUsername(value) {
    let error;
    if (value.trim().length < 5) {
      error = 'Por favor verifique su información de usuario';
    }
    return error;
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Por favor verifique su información de email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Por favor verifique su información de email';
    }
    return error;
  }

  return (
    
      <form className={`gap-4 Contact ${formStyle}`} onSubmit={handleSubmit}>
        <label className="" htmlFor="username">Nombre completo</label>
        <input className="text-black p-2 border-solid border-2 rounded-lg	" id="username" type="text" placeholder="Ingrese su nombre completo" />

        <label htmlFor="email">Email</label>
        <input className="text-black p-2 border-solid border-2 rounded-lg	" id="email" type="text" placeholder="Ingrese su email" />

        <button className=" p-2 border-solid border border-y-indigo-500 rounded-lg	" type="submit">Enviar</button>

        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    
  );
};

export default Form;