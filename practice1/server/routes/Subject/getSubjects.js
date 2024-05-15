const conn1=require('../../connection.ts').conn

module.exports= (req, res)=>{
    let queryCondition= req.body.id ? ` where id=${req.body.id} ` : ''
    const query=`select * from subjects ${queryCondition}`
    conn1.query(query, [], (err, res1)=>{
        if(err){
            res.send({status:'error', msg:err})
        }
        else{
            res.send({status:'success', data:res1})
        }
    })
}