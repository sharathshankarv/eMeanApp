const express = require('express');
const router = express.Router();

router.get('/productDetails', (req, res)=>{
    res.send('Product Details');
})

module.exports = router;