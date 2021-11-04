const express = require('express')
const app = express();

const produtos = require('./routes/produtos')
const faturas = require('./routes/faturas')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*' );
    res.header(
        'Access-Control-Allow-Header',
         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Header','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send(ok)
    }

    next();
});

app.use('/produtos', produtos);
app.use('/faturas', faturas);

module.exports = app;