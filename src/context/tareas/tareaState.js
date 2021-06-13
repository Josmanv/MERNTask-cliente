import React, {useReducer} from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGRAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA
} from '../../types';

const TareaState = props =>{

    const initialState = {
        tareas: [
            { id: 1, nombre:'Elegir plataforma', estado:true, proyectoId: 1},
            { id: 2, nombre:'Elegir colores', estado:false, proyectoId: 2},
            { id: 3, nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            { id: 4, nombre:'Elegir hosting', estado:true, proyectoId: 4},
            { id: 5, nombre:'Elegir plataforma', estado:true, proyectoId: 1},
            { id: 6, nombre:'Elegir colores', estado:false, proyectoId: 2},
            { id: 7, nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            { id: 8, nombre:'Elegir hosting', estado:true, proyectoId: 4},
            { id: 9, nombre:'Elegir plataforma', estado:true, proyectoId: 2},
            { id: 10, nombre:'Elegir colores', estado:false, proyectoId: 3},
            { id: 11, nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            { id: 12, nombre:'Elegir hosting', estado:true, proyectoId: 3},
            { id: 13, nombre:'Elegir plataforma', estado:true, proyectoId: 3}

        ],
        tareasproyecto : null,
        errortarea : false
    }

    // Crear el dispatch y el estate
    const [state, disptacth] = useReducer(TareaReducer, initialState);

    // Crear funciones para el dispatch

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        disptacth({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    const agregarTarea = tarea =>{
        disptacth({
            type: AGREGRAR_TAREA,
            payload: tarea
        });
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () =>{
        disptacth({
            type: VALIDAR_TAREA
        });
    }

    // Eliminar tarea por su id
    const eliminarTarea = tareaId => {
        disptacth({
            type: ELIMINAR_TAREA,
            payload: tareaId
        });
    }

    return(
        <tareaContext.Provider
            value={{
               tareas: state.tareas,
               tareasproyecto: state.tareasproyecto,
               errortarea: state.errortarea,
               obtenerTareas,
               agregarTarea,
               validarTarea,
               eliminarTarea
            }}> 
            {props.children}
        </tareaContext.Provider>
    );
 

}

export default TareaState;