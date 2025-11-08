// db.js

const { Pool } = require('pg');

// Configuración de la conexión a la base de datos "IA-CRUD"
const pool = new Pool({
    host: 'dpg-d474s3shg0os73fejntg-a',      // o la dirección de tu servidor
    user: 'useroptional',       // tu usuario de PostgreSQL
    password: 'C9BhGamZg31Yq5WQR4sEFxkLqYHFr5pu', // tu contraseña
    database: 'IA-CRUD',    // nombre de tu base de datos
    port: 5432,             // puerto por defecto de PostgreSQL
    max: 10,        
    ssl:{rejectUnauthorized:false},        // límite de conexiones
    idleTimeoutMillis: 30000,
});

// Exportar el pool para usar en los controladores
module.exports = pool;
