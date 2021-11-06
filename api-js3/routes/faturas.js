const express = require('express');
const faturas = express.Router();
const pool = require('../db/pgsql');



faturas.get('/:dias',(req, res, next )=>{

res.status(200).send({
    messgae: "dias:"+ req.params.dias
});
      
})

faturas.get('/inadimplencias/:dias',(req, res, next )=>{

    var dias = req.params.dias;
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    
    function zero(i){
      if(i < 10){
        return "0" + i;
      }else {
        return i;
      }
    }
    var hoje = ano +'-'+zero(mes)+'-'+ zero(dia);
    
    var query = "SELECT * FROM public.vi_js3_relat_inadimplencias  WHERE data_vencimento < '"+hoje+"' AND (DATE(NOW()) - data_vencimento) >= "+ dias; 
    
     pool.query( query , (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
      
})

module.exports = faturas;