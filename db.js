const Pool = require('pg').Pool

const pool = new Pool({
    user: 'qawozhemibgyod',
    password: 'e2768fb4a7a6d05c5987bf88ae27b163427b1cb6ade39949bb451d3fd9c60be6',
    host:'ec2-52-208-164-5.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd89iknhnjigteq',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
