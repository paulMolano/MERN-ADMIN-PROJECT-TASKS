import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';



const ProyectoState = props => {

    const initialState = {
        formulario : false,
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,

            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;