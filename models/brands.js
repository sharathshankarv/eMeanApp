var mongoose = require('mongoose');

var brandSchema = {
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    }
};

module.exports = mongoose.model(brandSchema, 'brands');