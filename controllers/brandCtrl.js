var brandModel = require('../models/brands');

exports.getAllBrands = (req, res, next) =>{    
    brandModel.getAllBrand()
    .then(result => res.json(result))
    .catch(err => res.send({
        status: 400,
        msg: "Something went wrong",
        err: err
    }))
}

exports.getBrand = (req, res, next) =>{
    var id = req.params.id;

    brandModel.getBrandById(id)
    .then(result => {
        console.log(result)
        res.json(result)
    })
    .catch(err => {
        res.send({
            status: 400,
            msg: "Something went wrong",
            err: err
        });
    });
};

exports.addNewBrand = (req, res, next) => {
    brandModel.addBrand(req.body)
    .then(result => res.send(result))
    .catch(err => {
        res.send({
            err: err,
            status: 400,
            msg: "something Went Wrong"
        })
    })
};

exports.deleteAllBrand = (req, res, next) => {
    brandModel.deleteAll()
    .then(result => res.send(result))
    .catch(err => {
        res.send({
            msg: "Something went wrong",
            err: err,
            status: 400
        });
    })
}

exports.editBrand = (req, res, err) => {
    var reqObj = req.body;

    brandModel.editBrandOnID(reqObj)
    .then(result => res.send(result))
    .catch(err => {
        if(err){
            if(err.code === 11000) {
                res.send({
                    status: 400,
                    msg: "Invalid or Duplicate Key",
                    err: err
                });
            };

            res.send({
                status: 400,
                msg: "something went wrong",
                err: err
            })
        }
    })
};

