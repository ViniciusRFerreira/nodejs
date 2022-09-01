const {request, response} = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('<h1 style="color:green">Olá Express com Nodemon!</h1>')
});

app.listen(3000,  () => console.log('Server started at localhost:3000'));