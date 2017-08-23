const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
const bodyParser = require('body-parser');
const session = require('express-session');

var gameId = 1; //1 because undefined leads to error

//the time measuring error keeps increasing over time
var check = function() {
  var time = new Date().getHours()
  if (time >= 2 && time <= 6) {
    db.Game.create({
        //setgameid
      })
      .then(game => {
        gameId = game.id
      })
      .then(function() {
        setTimeout(check, 3600000)
      })
  } else {
    console.log("check")
    setTimeout(check, 15000);
  }
};

check()

module.exports = check;


