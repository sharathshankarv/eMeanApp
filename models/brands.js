var mongoose = require('mongoose');

var brandModel = mongoose.Schema({    
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
});

var brandsSchema = mongoose.model('brands', brandModel);

exports.brandsModel = brandsSchema;

exports.getBrandById = (id) => {    
    return new Promise((resolve, reject) =>{
        brandsSchema.findById(id)
        .then(result =>  resolve(result))
        .catch(err => reject(err));
    })
}

exports.getAllBrand = () => {
    return new Promise((resolve, reject) => {        
        brandsSchema.find({})
        .then(result => resolve(result))
        .catch(err => reject(err));
    })
}

exports.addBrand = (newObj) => {    
    let nObj = new brandsSchema({
        "name": newObj.name,
        "email": newObj.email
    });   

    return new Promise((resolve, reject) => {
        nObj.save()
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
}

exports.deleteAll = () => {
    return new Promise((resolve, reject)=> {
        brandsSchema.deleteMany()
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
}

exports.editBrandOnID = (reqObj) => {
    var id = reqObj._id;
    return new Promise((resolve, reject) => {
        brandsSchema.findByIdAndUpdate(
            id,
            {   
                name: reqObj.name, 
                email: req.email
            },
            {new: true}, 
            (err, result) => {
                if(err) reject(err);

                resolve(result);
            }
        )
    })
}

