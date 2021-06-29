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
                tareasproyecto: action.payload
            }
        case AGREGRAR_TAREA:
        return {
            ...state,
            tareasproyecto: [action.payload, ...state.tareasproyecto],
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
            tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
        }
        case ACTUALILZAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea)
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