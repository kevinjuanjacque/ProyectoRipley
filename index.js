const express = require('express');
const app = express();
const morgan = require('morgan');
const cors =require('cors');
const router = require('./router/productRouter');

app.use(cors());
app.use(express.json());
app.use('/product',router);
console.log(__dirname+'/frontend/build')
app.use('/', express.static(__dirname+'/frontend/build'));

const port = process.env.PORT || '4000'
app.listen(port,()=>{
    console.log('Servidor escuchando puerto '+port);
})