const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views', 'products.ejs'), {
    pageTitle: 'Page Not Found',
  });
});

router.post('/add', (req, res) => {
  res.send('<h2>Add Product</h2>');
});

module.exports = router;
