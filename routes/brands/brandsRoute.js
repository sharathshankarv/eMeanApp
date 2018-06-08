const express = require('express');
const router = express.Router();

router.get('/getAllBrands', (req, res)=>{
    res.send('Brands Listing');
})

module.exports = router;