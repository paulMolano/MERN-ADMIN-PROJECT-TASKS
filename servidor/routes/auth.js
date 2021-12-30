//Rutas para autenticar usuarios
const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const auth = require("../middleware/auth");

const {
  autenticarUsuario,
  usuarioAutenticado,
} = require("../controllers/authController");

//Iniciar sesión
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

router.get("/", auth, usuarioAutenticado);

module.exports = router;
