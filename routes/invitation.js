var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var invite = require('../models/invitation.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.db.collection('invitation').find(function (err, products) {
        if (err) return next(err);
        console.log(products);
        res.json(products);
      });
    });

module.exports = router;