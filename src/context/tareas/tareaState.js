import React, {useContext, useReducer} from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO
} from '../../types';

const TareaState = props =>{

    const initialState = {
        tareas: [
            {nombre:'Elegir plataforma', estado:true, proyectoId: 1},
            {nombre:'Elegir colores', estado:false, proyectoId: 2},
            {nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            {nombre:'Elegir hosting', estado:true, proyectoId: 4},

            {nombre:'Elegir plataforma', estado:true, proyectoId: 1},
            {nombre:'Elegir colores', estado:false, proyectoId: 2},
            {nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            {nombre:'Elegir hosting', estado:true, proyectoId: 4},

            {nombre:'Elegir plataforma', estado:true, proyectoId: 2},
            {nombre:'Elegir colores', estado:false, proyectoId: 3},
            {nombre:'Elegir plataforma de pago', estado:false, proyectoId: 3},
            {nombre:'Elegir hosting', estado:true, proyectoId: 3},

            {nombre:'Elegir plataforma', estado:true, proyectoId: 3}

        ],
        tareasproyecto : null
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

    return(
        <tareaContext.Provider
            value={{
               tareas: state.tareas,
               tareasproyecto: state.tareasproyecto,
               obtenerTareas
            }}> 
            {props.children}
        </tareaContext.Provider>
    );
 

}

export default TareaState;