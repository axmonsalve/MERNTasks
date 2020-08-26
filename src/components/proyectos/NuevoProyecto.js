import React, { useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

function NuevoProyecto() {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer nombre del proyecto
  const { nombre } = proyecto;

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //Validar proyecto
    if (nombre === '') {
      return
    }

    //Agregar al state
    agregarProyecto(proyecto)

    //Reiniciar form
    setProyecto({nombre:""})
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            value={nombre}
            name="nombre"
            placeholder="Nombre Proyecto"
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            value="Agregar Proyecto"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
    </>
  );
}

export default NuevoProyecto;
