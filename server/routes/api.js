const express = require('express');
const data = require('./data');
const router = express.Router();

// GET users api
router.get('/users', (req, res, next) => {
  res.send(data);
});

module.exports = router;

