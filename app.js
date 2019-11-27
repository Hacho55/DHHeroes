
// Require de Express
const express = require('express');

//Router
const rutasHeroes = require('./routes/heroes');
const rutasMain = require('./routes/main');


// Ejecución de Express
const app = express();


// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));



app.use('/heroes', rutasHeroes);
app.use('/', rutasMain);





