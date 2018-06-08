var mongooes = require('mongoose');

const productCategory = mongooes.Schema({
    _id: mongooes.Types.ObjectId,
    cat_name: {
        type: String,
        require: true
    },
    parent_cat_id: {
        type: String,
        require: true
    }

})

module.exports = mongooes.model('productCategory', productCategory);