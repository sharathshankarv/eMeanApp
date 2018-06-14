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
        .then(seller =>{
            console.log("Seller Added Successfully in Model");
            resolve(seller);
        })
        .catch(err => {
            reject(seller);
        })
    })
}

