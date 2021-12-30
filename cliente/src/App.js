import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AutenticacionState from "./context/autenticacion/autenticacionState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AutenticacionState>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="nueva-cuenta" element={<NuevaCuenta />} />
                <Route path="proyectos" element={<Proyectos />} />
              </Routes>
            </Router>
          </AutenticacionState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
