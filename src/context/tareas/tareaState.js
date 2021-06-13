import React, {useContext, useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

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

        ]
    }

    // Crear el dispatch y el estate
    const [state, disptacth] = useReducer(TareaReducer, initialState);

    return(
        <TareaContext.Provider
            value={{
               tareas: state.tareas
            }}> 
            {props.children}
        </TareaContext.Provider>
    );
 

}

export default TareaState;