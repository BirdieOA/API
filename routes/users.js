const express =require('express');


//controlador
const {
  getAllUsers, saveUser } 
  = require('./../controllers/users');


const router = express.Router();

//agregar rutas

router.get('/', getAllUsers);

router.post('/', saveUser)

module.exports = router;