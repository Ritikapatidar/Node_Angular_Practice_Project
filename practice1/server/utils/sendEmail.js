const nodemailer= require('nodemailer')

const sendMail=async(email, text, html)=>{
    try{
        const transporter= nodemailer.createTransport({
            host:'mail.mailtest.radixweb.net',
            port:465,
            secure:true,
            auth:{
                user: "testdotnet@mailtest.radixweb.net",
                pass: "Radix@web#8",
            }
           })
          await transporter.sendMail({
            from:"testdotnet@mailtest.radixweb.net",
            to:email,
            subject:text,
            html:html
           })
           console.log("Mail successfully send!");
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {sendMail}