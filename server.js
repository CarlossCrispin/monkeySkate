const express = require ('express');
const path = require ('path');

const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const mongoose = require ('mongoose');
const apiRouter =require ('./routes/api_v1')
const app = express();
// mongoose.connect('mongodb://localhost/meanDB');
// mongoose.connect('mongodb://localhost/meandb',{useNewUrlParser: true })
mongoose.connect('mongodb://crispin:crispinmeanDB2019@ds125048.mlab.com:25048/meandb',{useNewUrlParser: true })
.then(() => {
 
    // Cuando se realiza la conexión, lanzamos este mensaje por consola
console.log('La conexión a MongoDB se ha realizado correctamente!!');
})
.catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/', apiRouter);

// console.log(__dirname);
//static files
app.use(express.static(path.join(__dirname , 'public/dist/user')));
app.listen(process.env.PORT || 3000, ()=>{
    console.log('escuchando');
})