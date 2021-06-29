import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGRAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';
import clienteAxios from '../../config/axios';



const ProyectoState = props => {

    const proyectos = [
    {id:1, nombre: 'Tienda Virtual'},
    {id:2, nombre: 'Intranet'},
    {id:3, nombre: 'Diseño de sitio web'},
    {id:4, nombre: 'Q&A'}
    ];

    const initialState = {
        proyectos : [],
        formulario : false,
        errorFormulario : false,
        proyecto : null
    }

    //dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }

    //Obtener los proyectos
    const obtenerProyectos = async () => {
       try {

        const resultado = await clienteAxios.get('/api/proyectos');
        // console.log(resultado.data.proyectos);
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: resultado.data.proyectos
        })
       } catch (error) {
        console.log(error);
       }
    }

    // Añadir nuevo proyecto
    const agregarProyecto = async proyecto =>{

     try {
         const resultado = await clienteAxios.post('/api/proyectos', proyecto);
        //  console.log(resultado);
        //Insertar el proyecto en el state
        dispatch({
            type: AGREGRAR_PROYECTO,
            payload: resultado.data
        });
     } catch (error) {
         console.log(error);
     }

    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }

    // Selecciona el proyecto clickado por el usuario
    const proyectoActual = (proyectoId) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        });
    } 

    // Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
        try {
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            });
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario : state.formulario,
                errorFormulario : state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}> 
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;