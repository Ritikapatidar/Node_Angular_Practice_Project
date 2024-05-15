const mysql= require('mysql')
const conn=mysql.createConnection({
    host:'radixusers2.com',
    user:'ritika_patidar',
    password:'deep70',
    database: 'ritika_patidar'
})
module.exports={conn}