const uuid = require('uuid').v4;

const MIS_USERS = [{
  id: uuid(),
name: 'Birdie',
country: 'Bangladesh',
}
]

const getAllUsers = (req, res) => {
  console.log('Escuchando a users 🕹️');

  // res.send('Escucho lo que dices🫵');
  res.status(200).json({
    status: 'success',
    data: {
      users: MIS_USERS
    }
  });
}

const saveUser = (req, res) => {
  const body = req.body;

//TODO: Send user to DB.
const newUser = {
  id: uuid(),
  name: body.name,
  country: body.country,
}

MIS_USERS.push(newUser)
  
  res.status('201').json({
    status: 'Success',
    data: newUser
  });
}

module.exports = {
  getAllUsers,
  saveUser,
}