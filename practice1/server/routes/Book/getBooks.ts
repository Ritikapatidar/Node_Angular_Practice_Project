const getBookConn=require('../../connection.ts').conn

module.exports= (req, res)=>{
    let queryCondition= req.body.id ? ` where b.id=${req.body.id} ` : ''
    const query=`select b.id, b.name, b.author, s.name as subject_name, s.id as subject_id, s.code from books b left join subjects s on b.s_id=s.id ${queryCondition}`
    getBookConn.query(query, [], (err, res1)=>{
        if(err){
            res.send({status:'error', msg:err})
        }
        else{
            res.send({status:'success', data:res1})
        }
    })
}