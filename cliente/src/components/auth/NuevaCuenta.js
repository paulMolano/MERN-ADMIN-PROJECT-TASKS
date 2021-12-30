import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import alertaContext from "../../context/alertas/alertaContext";

const NuevaCuenta = () => {
  //Extraer valores del context
  const alertasContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = alertasContext;

  //State para iniciar sesión
  const [nuevoUsuario, guardarnuevoUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer de nuevoUsuario
  const { nombre, email, password, confirmar } = nuevoUsuario;

  //Cuando cambian los inputs el usuario coge el valor actual
  const onChange = (e) => {
    guardarnuevoUsuario({
      ...nuevoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nuevoUsuario);

    //Validar que no haya campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //Password minimo de 6 caracteres
    if (password.trim().length < 6) {
      mostrarAlerta(
        "La contraseña debe de tener mínimo 6 caracteres",
        "alerta-error"
      );
      return;
    }

    //Ambos password seán iguales
    if (password.trim() !== confirmar.trim()) {
      mostrarAlerta("Ambas contraseñas deben de ser iguales", "alerta-error");
      return;
    }

    //Pasarlo al action

    //Limpiar los inputs
    guardarnuevoUsuario({
      nombre: "",
      email: "",
      password: "",
      confirmar: "",
    });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Crear Nueva Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Ya estoy registrado
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
