import React, { useReducer } from 'react'
import {v4 as uuidv4} from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGRAR_PROYECTO,
    VALIDAR_FORMULARIO
} from '../../types';



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
        errorFormulario : false
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
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // Añadir nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id=uuidv4();

        //Insertar el proyecto en el state
        dispatch({
            type: AGREGRAR_PROYECTO,
            payload: proyecto
        });

    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        });
    }


    return(
        <proyectoContext.Provider
            value={{
                proyectos : state.proyectos,
                formulario : state.formulario,
                errorFormulario : state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}> 
            {props.children}
        </proyectoContext.Provider>
    );
}

export default ProyectoState;