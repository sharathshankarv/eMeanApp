const express = require('express');
const router = express.Router();
var brandCtrl = require("../../controllers/brandCtrl");

router.get('/getAllBrands', brandCtrl.getAllBrands);
router.get('/getBrand/:id', brandCtrl.getBrand);
router.post('/addBrand', brandCtrl.addNewBrand);
router.get('/deleteAllBrands', brandCtrl.deleteAllBrand);
router.post('/editBrand', brandCtrl.editBrand);


module.exports = router;