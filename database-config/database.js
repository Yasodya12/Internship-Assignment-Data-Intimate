const {createPool, createConnection} = require("mysql2");

const pool=createPool({
    port:3306,
    host:"localhost",
    user:"root",
    password:"1234",
    database:"express",
    connectionLimit:"20",

})

module.exports=pool;