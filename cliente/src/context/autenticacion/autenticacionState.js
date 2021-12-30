import React, { useReducer } from "react";
import {} from "../../types";
import autenticacionContext from "./autenticacionContext";
import autenticacionReducer from "./autenticacionReducer";

const AutenticacionState = (props) => {
  const initialState = {};

  const [state, dispatch] = useReducer(autenticacionReducer, initialState);

  // Funciones

  return (
    <autenticacionContext.Provider value={{}}>
      {props.children}
    </autenticacionContext.Provider>
  );
};

export default AutenticacionState;
