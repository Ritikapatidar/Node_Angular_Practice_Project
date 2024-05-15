const connection=require('../../connection.ts').conn
module.exports=(req, res1)=>{
    const query= 'insert into books (name, author, s_id) values(?,?,?)'
    connection.query(query, [req.body.b_name, req.body.author, parseInt(req.body.subject)], (err, res)=>{
        if(err){
            res1.send({status:'error', msg:err})
        }
        else{
            return res1.send({status:'success', msg:'Book added successfully!'})
        }
    })}