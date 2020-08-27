import React, {useContext, useState} from 'react'
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from '../../context/tareas/tareaContext'

function FormTarea() {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { agregarTarea } = tareasContext;

  //state del formulario
  const [tarea, setTarea] = useState({
    nombre: ''
  })

  //Extraer el nombre del proyecto
  const {nombre} = tarea

  //Si no hay proyecto seleccionado
  if(!proyecto){
    return null
  }

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto

  //Leer los valores del formulario
  const handleChange = e => {
    setTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    //Validar

    //Pasar validacion

    //Agregar la nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id
    tarea.estado = false
    agregarTarea(tarea)

    //Reiniciar el form
  }


  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input type="text" className="input-text" name="nombre" value={nombre} placeholder="Nombre Tarea..." onChange={handleChange}/>
        </div>
        <div className="contenedor-input">
          <input type="submit" value="Agregar Tarea" className="btn btn-block btn-primario"/>
        </div>
      </form>
    </div>
  )
}

export default FormTarea
