import React, {useReducer} from 'react';
import tareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios';

import {
    TAREAS_PROYECTO,
    AGREGRAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALILZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props =>{

    const initialState = {
        tareasproyecto : [],
        errortarea : false,
        tareaseleccionada : null
    }

    // Crear el dispatch y el estate
    const [state, disptacth] = useReducer(TareaReducer, initialState);

    // Crear funciones para el dispatch

    // Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('api/tareas', {params: {proyecto}});
            console.log(resultado);
            disptacth({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });
        } catch (error) {
            console.log(error);
        }
    }

    const agregarTarea = async tarea =>{
       try {
           const resultado = await clienteAxios.post('/api/tareas', tarea);
        disptacth({
            type: AGREGRAR_TAREA,
            payload: tarea
        });
       } catch (error) {
           console.log(error);
       }
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () =>{
        disptacth({
            type: VALIDAR_TAREA
        });
    }

    // Eliminar tarea por su id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, {params: {proyecto}});
            disptacth({
                type: ELIMINAR_TAREA,
                payload: id
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Edita o modifica una tarea
    const actualizarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado);
            disptacth({
                type: ACTUALILZAR_TAREA,
                payload: resultado.data.tarea
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Extrae una tarea para editarla
    const guardarTareaActual = tarea => {
        disptacth({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

   
    // Elimina la tarea seleccionada
    const limpiarTarea = () => {
        disptacth({
            type: LIMPIAR_TAREA
        });
    }

    return(
        <tareaContext.Provider
            value={{
               tareasproyecto: state.tareasproyecto,
               errortarea: state.errortarea,
               tareaseleccionada: state.tareaseleccionada,
               obtenerTareas,
               agregarTarea,
               validarTarea,
               eliminarTarea,
               guardarTareaActual,
               actualizarTarea,
               limpiarTarea
            }}> 
            {props.children}
        </tareaContext.Provider>
    );
 

}

export default TareaState;