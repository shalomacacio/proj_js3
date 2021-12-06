const Pool = require('pg').Pool
const pool = new Pool({
  host: '170.150.200.9',
  database: 'mkData3.0',
  //database: 'mkData3.0-Teste',
  user: 'cliente_r',
  password: 'Cl13nt_R',
  port: 5432,
})
 module.exports = pool 