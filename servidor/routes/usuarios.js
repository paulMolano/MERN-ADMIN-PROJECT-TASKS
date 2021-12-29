//Rutas para crear usuarios
const express = require("express");
const { crearUsuario } = require("../controllers/usuarioController");
const router = express.Router();

//Crea un usuario
//  api/usuarios

router.post("/", crearUsuario);

module.exports = router;
