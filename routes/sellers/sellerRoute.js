const express = require('express');
const router = express.Router();
var seller = require('../../models/sellers');
var sellerCtrl = require('../../controllers/sellerCtrl');

router.get('/getAllsellers',sellerCtrl.getAllSellers);
router.post('/addSeller', sellerCtrl.addSeller);
router.get('/getSeller/:id', sellerCtrl.getSeller);
router.post('deleteSellers', sellerCtrl.deleteAllSellers);
router.get('/deleteSeller/:id', sellerCtrl.deleteSellerById);


router.get('/editSeller/:id', (req, res, next)=>{
    var id = req.params.id;
    console.log(id);
    seller.find({ _id: id }, (err, result)=> {
        if (err) res.json(err);

            console.log();        
            res.json(result);
      });
})

module.exports = router;