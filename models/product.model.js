const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: "string",
    description: "string",
    price: "number",
    stock: "number",
    useId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Product', productSchema );