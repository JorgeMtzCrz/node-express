const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title: String,
    description: String,
    specifications: [{ titleSpecification: String, descriptionProduct: String }],
    cathegory: { type: String, enum: ['hdtvs', 'accesories', 'computers', 'audio', 'smartphones'] },
    price: Number,
    img: String,
    stock: Boolean,
    discount: Number,
    popular: Boolean,
    comp_pricing: String,
    url: String,
    available: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);