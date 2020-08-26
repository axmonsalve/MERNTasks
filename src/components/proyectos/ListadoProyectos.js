import React from 'react'
import Proyecto from './Proyecto'

function ListadoProyectos() {

  const proyectos = [
    {nombre: 'Tienda virtual'},
    {nombre: 'Intranet'},
    {nombre: 'Diseño de Sitio'},
  ]

  return (
    <ul className="listado-proyectos">
      {proyectos.map(proyecto=>(
        <Proyecto proyecto={proyecto}/>
      ))}
    </ul>
  )
}

export default ListadoProyectos
