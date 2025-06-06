import nodemailer from 'nodemailer'

const sendEmail = async (to, subject, html) =>{
    try{
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth:{
            user: process.env.Email_User,
            pass: process.env.Email_Pass
        }
    });

    await transporter.sendMail({
        from: process.env.Email_User,
         to, 
         subject, 
         html
    })
}catch(err){
    console.log(err.message)
}
}

export default sendEmail;