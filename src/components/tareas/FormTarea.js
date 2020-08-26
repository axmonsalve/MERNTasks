import React from 'react'

function FormTarea() {
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
