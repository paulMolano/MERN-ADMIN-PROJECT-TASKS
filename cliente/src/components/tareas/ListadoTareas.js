import React, { useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  //Extraer proyectos de state
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];

  return (
    <>
      <h2>{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => eliminarProyecto(proyectoActual.id)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
