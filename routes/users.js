const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* GET users listing. */
// router.get('/', function(req, res, next) {

//   const user = new User({
//     firstName: 'Eshetu',
//     lastName: 'Abebe',
//     email: 'eabebe7@mum.edu',
//     password: 'eshie347',
//     previledge: 'ADMIN'
//   });

//   user.save((err, doc) => {
//     if (!err) {
//         console.log('user saved');
//         res.status(200).json({'sucess': 200});
//     } else {
//         console.log("user not saved");
//         // next(err);
//     }
//   });

// });

router.post('/validateEmail', (req, res) => {
  User.find({email: req.body.email}, (err, users) => {
      console.log(req.body.email);
      if (err) console.dir(err);
      res.status(200).json(users.length > 0);
  });
});

router.post('/signup', (req, res, next) => {
  //save
  let user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.password = req.body.userPassword.password;
  user.active = req.body.active;
  user.previledge = req.body.previledge

  console.log('preparing to save');
  user.save((err, doc) => {
      if (!err) {
          console.log('user saved succesfully');
          res.status(200).json({'sucess': 200});
      } else {
          next(err);
      }
  });
});

router.post('/signin', (req, res, next) => {
  let credentials = req.body;

  User.findOne({email: credentials.email}, (err, user) => {
      if (err) next(err);

      //email exists
      if (user) {
          if (!user.verifyPassword(credentials.password)) {
              res.status(400).json({
                  "status": "fail",
                  "message": "pass is not correct!"
              });
          } else {
              //token key
            //   const token = jwt.sign({}, RSA_PRIVATE_KEY, {
            //       algorithm: 'RS256',
            //       expiresIn: 3000,
            //       subject: credentials.email
            //   });

              // TODO: send token expired
            //   res.status(200).json(
            //     {idToken: token, user}
            // );

            res.status(200).json(
                {data: user}
            );
          }
      } else {
          res.status(400).json({
              "status": "fail",
              "message": "username does not exist!"
          });
      }
  });
});

module.exports = router;
