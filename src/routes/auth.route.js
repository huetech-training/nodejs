const express = require('express');

const router = express.Router();

router.post('/login', (_, res) => {
  res.send('<h2>Login</h2>');
});

router.post('/register', (_, res) => {
  res.send('<h2>Register</h2>');
});

module.exports = router;
