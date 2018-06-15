var mongoose = require('mongoose');

var sellersSchema = mongoose.Schema({
    //_id: mongoose.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    user_Rating: {
        type: Number,
        require: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

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
        sellerSchema.deleteOne(id)
        .then(delResp => resolve(delResp))
        .catch(err => reject(err))
    });
}

