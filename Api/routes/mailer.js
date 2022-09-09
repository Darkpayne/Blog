const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post('/', (req,res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user :'joshuaclifford3291@gmail.com',
            pass:'josh32914336'
        }
    }) 

    const mailOption = {
        from : req.body.email,
        to: 'joshuaclifford3291@gmail.com',
        subject : `Message from ${req.body.email}: ${req.body.subject}`,
        text : req.body.message
    } 

    transporter.sendMail(mailOption, (error,info)=>{
        if (error){
            console.log(error);
            res.status(406).json('error found') 
        }else{
            console.log('Email sent: ' + info.response);
            res.status(200).json('message sent!');
        }
    })
})

module.exports = router;