var express = require('express');
var router = express.Router();
const Question = require('../models/questions');

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
