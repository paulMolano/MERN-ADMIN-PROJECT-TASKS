import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      return {};

    case REGISTRO_ERROR:
      return {};

    case OBTENER_USUARIO:
      return {};

    case LOGIN_EXITOSO:
      return {};

    case LOGIN_ERROR:
      return {};

    case CERRAR_SESION:
      return {};

    default:
      return state;
  }
};

export default authReducer;
