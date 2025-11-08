// test-db.js
const db = require('./db');

db.query('SELECT NOW()')
  .then(res => console.log('Conexión exitosa:', res.rows[0]))
  .catch(err => console.error('Error de conexión:', err))
  .finally(() => db.end());
