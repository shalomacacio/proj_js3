const express = require('express');
const faturas = express.Router();
const pool = require('../db/pgsql');



faturas.get('/',(req, res, next )=>{

res.status(200).send({
    messgae: "dias:"
});
      
})

faturas.get('/inadimplencias',(req, res, next )=>{

    var query = "select os.codos, p.codpessoa, p.nome_razaosocial, os.data_abertura, os.data_fechamento, tipo.descricao as tipo_os \
    from public.mk_os as os join mk_pessoas as p on os.cliente = p.codpessoa \
    join mk_os_tipo as tipo on os.tipo_os = tipo.codostipo \
    where os.data_abertura between '2022-01-01' and '2022-01-27' \
    and tipo.descricao ilike '%sup%' \
    group by os.codos, p.codpessoa,  p.nome_razaosocial, tipo.descricao \
    having ( select count(*) from mk_os as os join mk_os_tipo as tipo1 on os.tipo_os = tipo1.codostipo \
              where data_abertura between '2022-01-01' and '2022-01-27' and cliente = p.codpessoa and tipo1.descricao ilike '%sup%' ) > 1 \
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