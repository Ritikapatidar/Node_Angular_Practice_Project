const otpGenerator= require('otp-generator')
const jwt=require('jsonwebtoken')

 const verifyToken=(req, res, next)=>{
    const token= req.headers['authorization'] || req.headers['access-token']
    if(token){
        jwt.verify(token, process.env.PRIVATE_KEY || '', (error, decoded)=>{
            if(error){
               return res.json({status:'error', msg:'Token is not valid!'})
            }
            else{
                req.decoded=decoded
                next();
            }
        })
    }
    else{
        return res.send({status:'error', msg:'Token is not supplied!'})
    }
}
const generateOtp=async()=>{
   let otp= otpGenerator.generate(6,{ upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false })
   return otp
}

module.exports ={ tokenVerify:verifyToken, generateOTP:generateOtp}