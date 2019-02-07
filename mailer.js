const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'kabinad.melaku@gmail.com',
           pass: 'K@binad25'
       }
   });
   const mailOptions = {
    from: 'kabinad.melaku@gmail.com', // sender address
    to: 'kmelaku@mum.edu,kabinad.melaku@outlook.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };
 
 module.exports = transporter;