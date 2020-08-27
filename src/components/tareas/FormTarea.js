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

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto

  const onSubmit = e => {
    e.preventDefault()

    //Validar

    //Pasar validacion

    //Agregar la nueva tarea al state de tareas

    //Reiniciar el form
  }


  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input type="text" className="input-text" name="nombre" placeholder="Nombre Tarea..."/>
        </div>
        <div className="contenedor-input">
          <input type="submit" value="Agregar Tarea" className="btn btn-block btn-primario"/>
        </div>
      </form>
    </div>
  )
}

export default FormTarea
