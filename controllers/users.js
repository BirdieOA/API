const uuid = require('uuid').v4

const MIS_USERS = [
  {
    id: uuid(),
    name: 'Birdie',
    country: 'Bangladesh'
  },
  {
    id: uuid(),
    name: 'Fang',
    country: 'Iceland'
  }
]

const getAllUsers = (req, res) => {
  console.log('Escuchando a users 🕹️')

  // res.send('Escucho lo que dices🫵');
  res.status(200).json({
    status: 'success',
    data: {
      users: MIS_USERS
    }
  })
}

const getUsersById = (req, res) => {
  const { id } = req.params

  // sample function, need to change to bd
  const user = MIS_USERS.find((user) => user.id === id)

  if (!user) {
    return res.status(404).json({
      status: 'fallo ☠️',
      message: 'Usuario no encontrado, escriba un id correcto 👇'
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  })
}

const saveUser = (req, res) => {
  const body = req.body

  // TODO: Send user to DB.
  const newUser = {
    id: uuid(),
    name: body.name,
    country: body.country
  }

  MIS_USERS.push(newUser)

  res.status('201').json({
    status: 'Success',
    data: newUser
  });
}

const deleteUser = (req, res) => {
  const { id } = req.params

  // sample function, need to change to bd
  const userIndex = MIS_USERS.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return res.status(404).json({
      status: 'fallo ☠️',
      message: 'Usuario no encontrado, escriba un id correcto 👇'
    })
  }

  MIS_USERS.splice(userIndex, 1)


  res.status(200).json({
    status: 'success',
    data: {
      users: MIS_USERS
    }
  });
}

const updateUser = (req, res) => {
  const { id } = req.params;
  
  //find user
 const userIndex = MIS_USERS.findIndex(user => user.id === id);

  //validate user exists
  if (userIndex === -1) {
    return res.status(404).json({
      status: 'fallo ☠️',
      message: 'Usuario no encontrado, escriba un id correcto 👇'
    })
  }

  //Update User
  MIS_USERS[userIndex] = {
    ...MIS_USERS[userIndex],
    ...req.body
  }

  // send response
  res.status(200).json({
    status: 'success',
    data: {
      user: MIS_USERS[userIndex],
    }
   })
}


module.exports = {
  getAllUsers,
  getUsersById,
  saveUser,
  deleteUser,
  updateUser,
}
