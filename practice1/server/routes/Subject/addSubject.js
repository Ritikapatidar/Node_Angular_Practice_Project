const conn1=require('../../connection.ts').conn
module.exports=(req, res1)=>{
    s_name= req.body.name
    s_code= req.body.code

    const query= 'insert into subjects (name, code) values(?,?)'
    conn1.query(query, [s_name, s_code], (err, res)=>{
        if(err){
            res1.send({status:'error', msg:err})
        }
        else{
            return res1.send({status:'success', msg:'Subject successfully added!'})
        }
    })}