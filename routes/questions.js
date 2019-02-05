var express = require('express');
var router = express.Router();
const Question = require('../models/questions');

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

router.post('/add', function(req, res, next) {
  //save
  const questions = new Question();
  questions.question = req.body.question;
  questions.active = req.body.active;

  console.log('preparing to save');
  questions.save((err, doc) => {
      if (!err) {
          console.log('Question saved succesfully');
          res.status(200).json({'sucess': 200});
      } else {
          next(err);
      }
  });
});

module.exports = router;
