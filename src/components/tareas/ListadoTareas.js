import React, {useContext} from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

function ListadoTareas() {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if(!proyecto){
    return <h2>Selecciona un proyecto</h2>
  }

  //Extraer proyecto actual
  const [proyectoActual] = proyecto

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir hosting", estado: false },
    { nombre: "Elegir plataformas de pago", estado: true },
  ];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button className="btn btn-eliminar" onClick={onClickEliminar}>Eliminar Proyecto &times;</button>
    </>
  );
}

export default ListadoTareas;
