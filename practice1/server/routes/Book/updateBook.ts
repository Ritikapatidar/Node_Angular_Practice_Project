let updateBookConn= require('../../connection.ts').conn
module.exports= (req,res)=>{
    let query= 'update books set name=?, author=?, s_id=? where id=?'
    updateBookConn.query(query,[req.body.b_name, req.body.author, req.body.subject, req.params.id], (err, res1)=>{
       if(err){ res.send({ status:'error', msg:err }) }
       else{
        res.send({ status:'success', msg:'Book updated' })
       }
    })
}