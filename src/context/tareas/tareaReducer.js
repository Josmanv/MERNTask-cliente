import {
    TAREAS_PROYECTO,
    AGREGRAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALILZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const tareaReducer = (state, action) => {
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGRAR_TAREA:
        return {
            ...state,
            tareas: [action.payload, ...state.tareas],
            errortarea: false
        }
        case VALIDAR_TAREA:
        return {
            ...state,
            errortarea: true
        }
        case ELIMINAR_TAREA:
        return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
        }
        case ESTADO_TAREA:
        case ACTUALILZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }
        default:
            return state;
    }
}

export default tareaReducer;