//Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { autenticarUsuario } = require("../controllers/authController");

//Crea un usuario
//  api/auth

router.post(
  "/",
  [check("email", "Agrega un email válido").isEmail()],
  [
    check("password", "El password debe ser minimo de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  autenticarUsuario
);

module.exports = router;
