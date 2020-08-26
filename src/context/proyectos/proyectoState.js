import React, { useReducer } from 'react'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

import {FORMULARIO_PROYECTO} from '../../types'

const ProyectoState = props => {
  
  const initialState = {
    
    proyectos : [
      {id:1 ,nombre: 'Tienda virtual'},
      {id:2 ,nombre: 'Intranet'},
      {id:3 ,nombre: 'Diseño de Sitio'},
      {id:4 ,nombre: 'Elegir ORM'}
    ],
    formulario: false
  }

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //Serie de funciones para el crud
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  return (
    <proyectoContext.Provider 
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario
        }}>
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState