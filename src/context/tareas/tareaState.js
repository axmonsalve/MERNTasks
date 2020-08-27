import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir hosting", estado: false, proyectoId: 3 },
      { nombre: "Elegir plataformas de pago", estado: true, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir colores", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: false, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 4 },
      { nombre: "Elegir colores", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: false, proyectoId: 2 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir hosting", estado: false, proyectoId: 4 },
    ],
    tareasproyecto: null,
    errortarea: false
  };

  //Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear las funciones

  //Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea
    })
  }

  //Valida y muestra un error de ser necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }


  return (
    <TareaContext.Provider value={{ 
      tareas: state.tareas,
      tareasproyecto: state.tareasproyecto,
      errortarea: state.errortarea,
      obtenerTareas,
      agregarTarea,
      validarTarea
      }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
