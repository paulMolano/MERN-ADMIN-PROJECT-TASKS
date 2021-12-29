//Rutas para CRUD proyectos
const express = require("express");
const router = express.Router();
const { crearProyecto } = require("../controllers/proyectoController");

//Crear un proyecto
// /api/proyectos
router.post("/", crearProyecto);

module.exports = router;
