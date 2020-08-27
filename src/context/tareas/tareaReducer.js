import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return{
        ...state,
        tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
      }
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],//State de tareas que tenemos, mas la nueva
        errortarea: false //Para quitar la alerta
      }
    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true
      }
    default:
      return state;
  }
};
