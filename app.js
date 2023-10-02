const express = require('express')

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

//middleware para pasar el json por el body
app.use(express.json());


// Routes.
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);

// Add Listener

app.listen(2020, () => {
  console.log('🌼 Escuchando 🌼');
});