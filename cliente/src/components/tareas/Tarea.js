import React, { useContext } from "react";
import TareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {
  //Traer del context la funcion agregarTarea
  const tareasContext = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  //Traer el proyecto actual
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  //Funcion cuando se presiona eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
