let conn1= require('../../connection.ts').conn
module.exports= (req,res)=>{

    let query= 'update subjects set name=?, code=? where id=?'
    conn1.query(query,[req.body.name, req.body.code, req.params.id], (err, res1)=>{
       if(err){ res.send({ status:'error', msg:err }) }
       else{
        res.send({ status:'success', msg:'updated' })
       }
    })
}