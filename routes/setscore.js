const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
const bodyParser = require('body-parser');
const session = require('express-session');

var time = undefined //create a global timer -- don't know if you need this
const twentyFourHours = 86400

// Create Post (GET)
router.get('/', function(req, res) {
  res.render('setscore')
})

var gameId = 1; //1 because undefined leads to error

//the time measuring error keeps increasing over time
var createGamePerTwentyFourHours = function() {
  time = new Date().getHours()
    db.Game.create()
    .then(game => {
      gameId = game.id
      console.log(game)
      console.log("\n\n\n\n\ngame created\n\n\n\n\n")
    })
};

setInterval(createGamePerTwentyFourHours, twentyFourHours)

router.post('/', function(req, res) {
  if (new Date().getHours() < 2 || new Date().getHours() > 6)  {
    console.log("Wait, be patient!");
    res.redirect('/wait');
  } 

  else if (new Date().getHours() == 2) {
    db.Score.findOne({
      where: {
        userId: req.session.user.id,
        gameId: gameId
      }
    })
    .then(result => {
        console.log("this is score");
        console.log(result);
        if (result !== null) {res.redirect('/wait')} //score record exists in database
        else {
          console.log("komt ie hier of niet")
          console.log(result)
          db.Score.create({
              score: 1,
              userId: req.session.user.id,
              gameId: gameId
          })
          .then(result => {
            console.log("score updated");
            res.redirect('/leaderboard');
          })
          .catch( e => console.log(e))
      }
    });
  } 

  else if (new Date().getHours() == 3) {
    db.Score.findOne({
      where: {
        userId: req.session.user.id,
        gameId: gameId
      }
    })
    .then(result => {
        console.log("this is score");
        console.log(result);
        if (result !== null) {res.redirect('/wait')} //score record exists in database
        else {
          console.log("komt ie hier of niet")
          console.log(result)
          db.Score.create({
              score: 2,
              userId: req.session.user.id,
              gameId: gameId
          })
          .then(result => {
            console.log("score updated");
            res.redirect('/leaderboard');
          })
          .catch( e => console.log(e))
      }
    });
  } 

  else if (new Date().getHours() == 4) {
    db.Score.findOne({
      where: {
        userId: req.session.user.id,
        gameId: gameId
      }
    })
    .then(result => {
        console.log("this is score");
        console.log(result);
        if (result !== null) {res.redirect('/wait')} //score record exists in database
        else {
          console.log("komt ie hier of niet")
          console.log(result)
          db.Score.create({
              score: 3,
              userId: req.session.user.id,
              gameId: gameId
          })
          .then(result => {
            console.log("score updated");
            res.redirect('/leaderboard');
          })
          .catch( e => console.log(e))
      }
    });
  } 

  else if (new Date().getHours() == 5) {
    db.Score.findOne({
      where: {
        userId: req.session.user.id,
        gameId: gameId
      }
    })
    .then(result => {
        console.log("this is score");
        console.log(result);
        if (result !== null) {res.redirect('/wait')} //score record exists in database
        else {
          console.log("komt ie hier of niet")
          console.log(result)
          db.Score.create({
              score: 4,
              userId: req.session.user.id,
              gameId: gameId
          })
          .then(result => {
            console.log("score updated");
            res.redirect('/leaderboard');
          })
          .catch( e => console.log(e))
      }
    });
  }
}) 

module.exports = router