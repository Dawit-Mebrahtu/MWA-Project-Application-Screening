var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var invite = require('../models/invitation.js');
var mailer = require('../mailer.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.db.collection('invitations').find({}).toArray(function(err, data){
        console.log(data); // it will print your collection data
        console.log("here");
        res.send(data);
    })});
    router.post('/', function(req, res, next) {
       var mailOptions = {
            from: 'kabinad.melaku@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: 'Subject of your email', // Subject line
            html: '<p>Your html here</p>'// plain text body
          };
        mailer.sendMail(mailOptions,function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
        console.log(req.body);
        invite.create({email:req.body.email,status:req.body.status});
       
          res.status(200);
      
      });
      
module.exports = router;