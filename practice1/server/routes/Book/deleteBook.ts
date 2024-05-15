const deleteBookConn=require('../../connection.ts').conn
module.exports= (req, res)=>{
    const query= 'delete from books where id=?'
    deleteBookConn.query(query, [req.params.id], (err, res1)=>{
        if(err){
            return res.send({ status:'error', msg:err })
        }
        else{
            return res.send({ status:'success', msg:'Book deleted successfully!' })
        }
    })

}