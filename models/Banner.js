const { Schema, model } = require('mongoose');

const bannerSchema = new Schema({
    title: String,
    subtitle: String,
    img: String,
    url: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Banner', bannerSchema);