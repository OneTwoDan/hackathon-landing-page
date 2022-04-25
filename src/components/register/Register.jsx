import { useState } from "react";
import "./register.css";
import FormInput from "./FormInput";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Nombre Completo",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Tiene que ser un Correo electrónico válido",
      label: "Correo electrónico",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Fecha de nacimiento",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "La contraseña debe de tener entre 8-20 caracteres e incluir al menos 1 letra, 1 numero y un caracter especial",
      label: "Contraseña",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Register;