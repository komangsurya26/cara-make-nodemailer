const express = require ('express')
const app = express ()
const nodemailer = require ('nodemailer')



//Buat transporter untuk mengirim email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'password'
    }
});

app.get('/send-email',(req,res)=>{
    
    //Konfigurasi email yang akan dikirim
    const mailOptions = {
        from: 'email',
        to: 'email',
        subject: 'Test Email from Node.js',
        text: 'This is a test email from Node.js using Nodemailer!'
    };
    // Kirim email
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.send('email send success!!!')
        }
    });
})



app.listen (3000, ()=>{
    console.log('Server listening on port 3000')
})