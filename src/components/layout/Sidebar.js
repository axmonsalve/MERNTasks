import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto'

function Sidebar() {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>
      <NuevoProyecto />
      <div className="proyectos">
        <h2>Tus proyectos</h2>
      </div>
    </aside>
  )
}

export default Sidebar
