import React, { useState } from "react";

export const NuevoProyecto = () => {
  //State para Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Lee los contenidos del input y los guarda en el estado
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia el nombre del nuevo proyecto
  const onSubmitProyecto = (e) => {
    e.prevent.default();

    //Validar el proyecto

    //Agregarlo al state

    //reiniciar el form
  };

  //Extraer nombre de proyecto
  const { nombre } = proyecto;

  return (
    <>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>

      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />

        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
