//Rutas para CRUD proyectos
const express = require("express");
const router = express.Router();

//Crear un proyecto
router.post("/", crearProyecto);

module.exports = router;
