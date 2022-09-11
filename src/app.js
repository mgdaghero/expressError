// Módulos
const express = require('express');
const mainRouter = require('./routes/mainRouter');
const app = express();

// Acá falta uno... 😇

// Configuración
app.use(express.static('public'));
// Acá falta el template engine

app.set('view engine', 'ejs');

app.use('/', mainRouter);

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})
