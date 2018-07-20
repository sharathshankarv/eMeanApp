var mongoose = require('mongoose');

var sellersSchema = mongoose.Schema({    
    name: {
        type: String,
        require: true
    },    
    email: {
        type: String,
        require: true,
        unique: true
    },
    user_Rating: {
        type: Number,
        require: false
    }
});

var sellerSchema = mongoose.model('sellers', sellersSchema);

exports.sellerSchema = sellerSchema;

exports.addSeller = function(seller){
    let newSeller = new sellerSchema({
        'name': seller.name,
        'user_Rating': seller.userRating,
        'email': seller.email
    });

    return new Promise((resolve, reject)=>{
        newSeller.save()
        .then(seller => resolve(seller))
        .catch(err => reject(err))
    })
}

exports.getAllSellers = function(){    
    return new Promise(function(resolve, reject){
        sellerSchema.find({})
        .then(sellerArr => resolve(sellerArr))
        .catch(err => reject(err))
    })    
}

exports.getSeller = function(id){
    return new Promise((resolve, reject) =>{
        sellerSchema.findById(id)
        .then((seller)=> resolve(seller))
        .catch(err => reject(err))
    })
}

exports.deleteSellers = ()=>{
    return new Promise((resolve, reject)=>{
        sellerSchema.deleteMany()
        .then(delResp => resolve(delResp))
        .catch(err => reject(err))
    });
}

exports.deleteSellerById = (id) => {    
    return new Promise((resolve, reject) =>{
        sellerSchema.findOneAndRemove(id)
        .then(delResp => resolve(delResp))
        .catch(err => reject(err))
    });
}

exports.editeSellerById = (id, obj) =>{
    return new Promise((resolve, reject) =>{
        sellerSchema.findOneAndUpdate(
            id, 
            {name: obj.name, 
             user_Rating: obj.user_Rating, 
             email: obj.email
            }, 
            {new: true}, 
            (err, result) =>{
            if(err) reject(err);

            resolve(result);
        });
    });
}

