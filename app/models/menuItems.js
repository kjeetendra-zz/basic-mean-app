const mongoose = require('mongoose');

const MenuItemsSchema = mongoose.Schema({
    name: String,
    category: String,
    price_small: Number,
    price_large: Number
})

module.exports = mongoose.model('MenuItem', MenuItemsSchema);