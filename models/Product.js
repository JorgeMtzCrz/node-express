const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: String,
    description: String,
    specifications: String,
    cathegory: { type: String, enum: ['hdtvs', 'accesories', 'computers', 'audio', 'smartphones'] },
    price: Number,
    img: String,
    stock: Boolean,
    discount: String,
    popular: Boolean,
    comp_pricing: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);