var mongoose = require('mongoose');

const productDetails = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    p_name: {
        type: String,
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId, 
        ref: 'productCategory'
    }],    
    seller: [{
        type: Schema.Types.ObjectId, 
        ref: 'sellers'
    }],
    p_brand: [{
        type: Schema.Types.ObjectId,
        ref: 'brands'
    }],
    p_description: {
        type: String,
        required: true
    },    
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
    max_qty_avialable:{
        type: Number,
        required: false
    },
    in_stock_qty:{
        type: Number,
        required: true
    },
    colors_available: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    p_specifications:{

    }
});

module.exports = mongoose.model('productDetails', productDetails);