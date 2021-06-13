import React, {useContext, useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = props =>{

    const initialState = {
        tareas: []
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