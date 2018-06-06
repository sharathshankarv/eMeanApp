var mongoose = require('mongoose');

var sellersSchema = {
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    user_Rating: {
        type: Number,
        require: false
    }
}

module.exports = mongoose.model(sellersSchema, 'sellers');