const express = require('express');
const faturas = express.Router();
const pool = require('../db/pgsql');

faturas.get('/',(req, res, next )=>{
  res.status(200).send({
      messgae: "dias:"
  });
      
})

faturas.get('/inadimplencias/:dt' ,(req, res, next )=>{

    let dt_fim  = req.params.dt;
    let newdate = new Date(dt_fim);
    let trintadias  = newdate.setDate(newdate.getDate() - 30);
    let dt_ini = new Date(trintadias).toISOString().split('T')[0];

    console.log(dt_ini);

    var query = "select os.codos, p.codpessoa, p.nome_razaosocial, os.data_abertura, os.data_fechamento, tipo.descricao as tipo_os \
    from public.mk_os as os join mk_pessoas as p on os.cliente = p.codpessoa \
    join mk_os_tipo as tipo on os.tipo_os = tipo.codostipo \
    where os.data_abertura between '" + dt_ini +"' and '"+ dt_fim +"' \
    and tipo.descricao ilike '%sup%' \
    group by os.codos, p.codpessoa,  p.nome_razaosocial, tipo.descricao \
    having ( select count(*) from mk_os as os join mk_os_tipo as tipo1 on os.tipo_os = tipo1.codostipo \
              where data_abertura between '" + dt_ini +"'  and '"+ dt_fim +"' and cliente = p.codpessoa and tipo1.descricao ilike '%sup%' ) > 1 \
     order by os.cliente asc"; 
    
     pool.query( query , (error, results) => {
        if (error) {
          throw error
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(results.rows)
      })
      
})

module.exports = faturas;