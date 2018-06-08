const express = require('express');
const router = express.Router();

router.get('/getAllProduct', (req, res)=>{
    res.send('Product Listing');
})

module.exports = router;
