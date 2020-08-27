import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

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
        tareas: [...state.tareas, action.payload] //State de tareas que tenemos, mas la nueva
      }
    default:
      return state;
  }
};
