const express = require('express');

const router = express.Router();
router.post('/login', (req, res) => {
  res.send('<h2>Sign In</h2>');
});

router.post('/register', (req, res) => {
  res.send('<h2>Register</h2>');
});

module.exports = router;
