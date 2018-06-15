var mongoose = require('mongoose');
var sellerModel = require('../models/sellers');

/* add seller into DB*/
exports.addSeller = (req, res, next)=>{     
    let newSeller = req.body;   

    sellerModel.addSeller(newSeller)
    .then(seller => {
        console.log("Seller Added Successfully in Ctrl");
        res.send(seller);
    })
    .catch(err =>{
        if(err){
            if(err.code === 11000)
                res.json({
                    status: 500,
                    msg: "seller already exists",
                    err: err
                });
        }        
    })
}

/* retrive all seller into DB*/
exports.getAllSellers = (req, res, next) => {
    sellerModel.getAllSellers()
    .then(sellers => {
        res.json(sellers);
    })
    .catch(err => {
        res.status(400).send(err);
    })
}

/* retrive particular seller based on id*/
exports.getSeller = (req, res, next) => {
    var id = req.params.id;

    sellerModel.getSeller(id)
    .then(seller => {
        res.send(seller);
    })
    .catch(err => {
        res.send({
            err: err,
            msg: "Seller not found",
            status: 501
        });
    });
}

/* delete all sellers */
exports.deleteAllSellers = (req, res, next) =>{
    sellerModel.deleteSellers()
    .then(resp => res.send(resp))
    .catch(err => {
        res.send({
            status: 501,
            msg: 'something went wrong',
            err: err
        })
    })
};

/* delete seller by ID */
exports.deleteSellerById = (req, res, next) =>{
    var id = req.params.id;
    sellerModel.deleteSellerById(id)
    .then(resp => res.send(resp))
    .catch(err => {
        res.send({
            status: 501,
            msg: "Seller Could not deleted",
            err: err
        })
    })
}
    