const express = require('express');
const path = require('path');
const authRouter = require('./auth.route');
const productRouter = require('./product.route');

const router = express.Router();
router.use('/auth', authRouter);
router.use('/product', productRouter);

router.use((req, res) => {
  res.render(path.join(__dirname, '../views', '404.ejs'), {
    pageTitle: 'Page Not Found',
  });
});

module.exports = router;
