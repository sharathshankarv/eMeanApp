var express = require('express');
var router = express.Router();

router.get('/products', (req, res, next)=>{
    res.send('Product Listing');
})



module.exports = router;