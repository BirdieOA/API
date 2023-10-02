const express = require('express');

const router = express.Router();
router.get ('/', () => {
  res.send('Hola desde productos');
} );

module.exports = router;