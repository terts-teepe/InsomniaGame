const express = require('express');
const router = express.Router();
const db = require('../models/database.js');
const bodyParser = require('body-parser');
const session = require('express-session');

// Create Post (GET)
router.get('/', function(req, res) {
  res.render('wait')
})

module.exports = router;