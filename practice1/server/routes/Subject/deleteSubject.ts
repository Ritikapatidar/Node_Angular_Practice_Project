const con=require('../../connection.ts').conn
module.exports= (req, res)=>{
    const bookDeleteQuery='delete from books where s_id=?'
    const bookDeleteParams=[req.params.id]
    con.query(bookDeleteQuery, bookDeleteParams, (err, res2)=>{
        if(err){
            return res.send({ status:'error', msg:err })
        }
        else{
            const query= 'delete from subjects where id=?'
            con.query(query, [req.params.id], (err, res1)=>{
                if(err){
                    return res.send({ status:'error', msg:err })
                }
                else{
                    return res.send({ status:'success', msg:'Subject deleted successfully!' })
                }
            })
        }
    })
}