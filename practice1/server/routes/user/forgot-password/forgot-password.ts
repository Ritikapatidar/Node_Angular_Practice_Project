const connection1= require('../../../connection.ts').conn
const otpG= require('../../../common/common_data').generateOTP
const sendMail= require('../../../utils/sendEmail.js').sendMail

const generateOtp= (req,res)=>{
    const query= `select * from user where email='${req.body.email}'`
    connection1.query(query, [], async(err,res1)=>{
        if(err){
          return res.send({ status:'error', msg:err })
        }
        else{
            if(res1.length>0){
                let otp= await otpG();
                let send_time= new Date();
                let expire_time= new Date(send_time.getTime() + 1000*60*5)                
                const updateQuery=`update user set otp=?, otp_send_time=?, otp_expire_time=? where email=?`
                const updateParams=[otp, send_time, expire_time, req.body.email]
                connection1.query(updateQuery, updateParams, async(err, res2)=>{
                    if(err){
                        return res.send({ status:'error', msg:err })
                      }
                      else{
                        await sendMail(req.body.email, 'User Authentication ', `One Time password: ${otp}` );
                        return res.send({ status:'success', msg:'Otp send successfully to this email!', otp:otp })
                      }
                })
            }
            else{
                return res.send({ status:'error', msg:"This user does not exist!" })
            }
        }
    })
}
const verifyOtp= (req,res)=>{
    let email= req.body.email
    let otp= req.body.otp
    let now= new Date()

    let query= 'select * from user where email=?'
    connection1.query(query, [email], (err, res1)=>{
        if(err){
            return res.send({ status:'error', msg:err })
        }
        else{
            if(res1.length<=0){
             return res.send({ status:'error', msg:'User not found!' })
            }
            else{
                if(res1.length>0 && res1[0].otp === parseInt(otp) && now < res1[0].otp_expire_time)
                {
                    return res.send({ status:'success', msg:'Otp verified!' })  
                }
                else{
                    return res.send({ status:'error', msg:'Otp verification failed or otp expired!' })  
                }
            }
        }
    })
}
const forgotPass=(req, res)=>{
    let email= req.body.email
    let password= req.body.password
    const query='select * from user where email=?'
    connection1.query(query, [email], (err, res1)=>{
        if(err){
            return res.send({ status:'error', msg:err })
        }
        else{
            if(res1.length<=0){
                return res.send({ status:'error', msg:'User not found!' })
            }
            else{     
                const query='update user set password=? where email=?'
                connection1.query(query, [password, email], (err, res1)=>{
                    if(err){
                        return res.send({ status:'error', msg:err })
                    }
                    else{
                        return res.send({ status:'success', msg:'Password updated successfully!' })  
                    }
                })
            }
        } 
    })
}
module.exports={generateOtp:generateOtp, verifyOtp:verifyOtp, forgotPassword:forgotPass}