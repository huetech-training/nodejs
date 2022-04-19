const express = require('express');

const router = express.Router();
router.get('/', (req, res) => {
  res.send('<h2>Products</h2>');
});
router.post('/add', (req, res) => { res.send('<h2>Add Product</h2>'); });

module.exports = router;
