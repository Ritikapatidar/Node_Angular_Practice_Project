const conn1 =require('../../../connection.ts').conn
const crypto= require('crypto')
const moment= require('moment-timezone')
const { registerMail } = require('../../../view/register_mail.template.ts')
const sendMail= require('../../../utils/sendEmail.js').sendMail

module.exports = (req, response) => {
    const fName= req.body.first_name
    const lName= req.body.last_name
    const email= req.body.email
    const password= req.body.password
    var token= crypto.randomBytes(32).toString('hex')
    const currentTime= moment(new Date()).format()
    const query= 'select * from user where email=?'
    conn1.query(query, [req.body.email], (err, res)=>{
        if(err){
           return res.send({status:'error', err:err})
        }
        else{
            if(res.length>0){
                // already exist
               return response.send({status:'success', msg:'User already exist'})
            }
            else{
                // insert
               const insertQuery= 'insert into user (first_name, last_name, email, password, token, date_time) values(?,?,?,?,?,?)'
               conn1.query(insertQuery, [fName, lName, email, password, token, currentTime], (err, res)=>{
                if(err){
                    return response.send({status:'error', msg:'Error'})
                }
                else{
                    sendMail(email, `WelCome ${fName}`, registerMail('Congratulations! ', 'You are successfully registered!'))
                    return response.send({status:'success', msg:'Registered successfully!', data:{email:req.body.email, date_time:currentTime }})
                }
               })
            }
        }
    })
}
