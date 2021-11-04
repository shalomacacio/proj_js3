const express = require('express');
const produtos = express.Router();



produtos.get('/',(req, res, next )=>{
    console.log("ok, deu certo!");
    res.status(200).send({
        message: "ok, deu certo!"
    })
    
})

produtos.post('/',(req, res, next )=>{
    res.status(200).send({
        message: "ok, usando POST deu certo!"
    })
    
})

module.exports = produtos;