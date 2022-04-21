const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views', 'products.ejs'), {
    pageTitle: 'Page Not Found',
  });
});

let data=[];
router.post('/add', (req, res) => {
  const body=req.body;
  console.log(body);
  data.push(body);
  res.render(path.join(__dirname, '../views', 'products-form.ejs'),{data:data});
});
router.delete('/add',(req,res)=>{
  data=[];
  res.send('done');
})

router.get('/add', (req, res) => {
  res.render(path.join(__dirname, '../views', 'products-form.ejs'),{data:[]});
});

module.exports = router;
