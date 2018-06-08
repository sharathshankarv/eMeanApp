var express = require('express');
var router = express.Router();

router.use('/brands', require('./brands/brandsRoute'));
router.use('/productDetails', require('./products/productDetails'));
router.use('/productListing', require('./products/products'));
router.use('/sellers', require('./sellers/sellerRoute'));


module.exports = router;