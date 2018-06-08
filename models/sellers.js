var mongoose = require('mongoose');

var sellersSchema = mongoose.Schema({
    //_id: mongoose.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        require: true
    },
    user_Rating: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model('sellers', sellersSchema);