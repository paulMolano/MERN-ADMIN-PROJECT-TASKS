//Rutas para crear tareas
const express = require("express");
const {
  crearTarea,
  obtenerTareas,
  actualizarTarea,
} = require("../controllers/tareaController");
const router = express.Router();
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//  api/tareas
//Crea una tarea
router.post(
  "/",
  auth,
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El proyecto es obligatorio").not().isEmpty()],
  crearTarea
);

//Obtener tareas por proyecto
router.get("/", auth, obtenerTareas);

//Actualizar tarea
router.put(
  "/:id",
  auth,
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El proyecto es obligatorio").not().isEmpty()],
  actualizarTarea
);

module.exports = router;
