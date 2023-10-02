const express = require('express')

// controlador
const {
  getAllUsers,
  saveUser,
  getUsersById,
  deleteUser
} = require('./../controllers/users')

const router = express.Router()

// agregar rutas

router.get('/', getAllUsers)

router.get('/:id', getUsersById)

router.post('/', saveUser)

router.delete('/:id', deleteUser)

module.exports = router
