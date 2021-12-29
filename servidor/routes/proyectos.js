//Rutas para CRUD proyectos
const express = require("express");
const router = express.Router();
const { crearProyecto } = require("../controllers/proyectoController");
const auth = require("../middleware/auth");

//Crear un proyecto
// /api/proyectos
router.post("/", auth, crearProyecto);

module.exports = router;
