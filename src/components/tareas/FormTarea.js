import React, {useContext} from 'react'
import proyectoContext from "../../context/proyectos/proyectoContext";

function FormTarea() {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if(!proyecto){
    return null
  }
  return (
    <div className="formulario">
      <form
      >
        <div className="contenedor-input">
          <input type="text" className="input-text" name="nombre" placeholder="Nombre Tarea..."/>
        </div>
        <div className="contenedor-input">
          <input type="submit" value="Agregar Tarea" className="btn btn-block btn-priirio"/>
        </div>
      </form>
    </div>
  )
}

export default FormTarea
