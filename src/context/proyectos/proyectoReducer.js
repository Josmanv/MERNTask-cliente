import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGRAR_PROYECTO
} from '../../types';

export default (state, action) =>{
    switch(action.type){
        case FORMULARIO_PROYECTO:
        return {
            ...state,
            formulario: true
        };
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        case AGREGRAR_PROYECTO:
        return{
            ...state,
            proyectos: [...state.proyectos, action.payload],
            formulario: false
        }
        default:
            return state;
    }
}