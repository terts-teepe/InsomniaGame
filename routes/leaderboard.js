const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
const bodyParser = require('body-parser');

router.get('/', function(req, res) {
  db.User.findAll({
    include: [{
      model: db.Score,
    }]
  }).then(users => {
    res.render('leaderboard', {
      users: users,
    });
  });
});

var dateNow = new Date();
console.log('hello ' + dateNow);

module.exports = router;
