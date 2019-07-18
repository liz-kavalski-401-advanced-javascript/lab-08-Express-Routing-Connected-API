'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    name:{type: String, require:true},
    price:{type: Number, require:true},
    description:{type: String, require:true},
    category:{type: String, require:true}
});

module.exports = mongoose.model('products', products);

//let obj = {name:'Mouse', price:9.99, description:'works good',category:'electronics'};