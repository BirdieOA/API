const express = require('express')

// controlador
const {
  getAllUsers,
  saveUser,
  getUsersById,
  deleteUser,
  updateUser
} = require('./../controllers/users')

const router = express.Router()

// agregar rutas

router.get('/', getAllUsers)

router.get('/:id', getUsersById)

router.post('/', saveUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router
