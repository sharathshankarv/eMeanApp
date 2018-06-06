var mongoose = require('mongoose');

const poductListing = {
    _id: Schema.Types.ObjectId,
    categories: [{type: Schema.Types.ObjectId, ref: 'productCategory'}],
    name: {
        type: String,
        required: true
    },
    in_stock_qty:{
        type: Number,
        required: true
    },
    p_brand: [{type: Schema.Types.ObjectId, ref: 'brands'}],
    actual_price: {
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    selling_price: {
        type: Number,
        required: true
    },
};

module.exports = mongoose.model('poductListing', poductListing);