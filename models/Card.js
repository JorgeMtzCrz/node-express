const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    title: String,
    subtitle: String,
    img: String,
    description: String,
    url: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Card', cardSchema);