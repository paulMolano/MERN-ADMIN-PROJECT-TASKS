const Usuario = require("../models/Proyecto");
const { validationResult } = require("express-validator");
const Proyecto = require("../models/Proyecto");

exports.crearProyecto = async (req, res) => {
  try {
    //Crear nuevo proyecto
    const proyecto = new Proyecto(req.body);
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Hubo un error" });
  }
};
