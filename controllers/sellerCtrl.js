var mongoose = require('mongoose');
var sellerModel = require('../models/sellers');

exports.addSeller = (req, res, next)=>{     
    let newSeller = req.body;   

    sellerModel.addSeller(newSeller)
    .then(seller => {
        console.log("Seller Added Successfully in Ctrl");
        res.send(seller);
    })
    .catch(err =>{
        res.status(400).send(err);
    })
}
    