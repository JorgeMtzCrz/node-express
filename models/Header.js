const { Schema, model } = require('mongoose');

const headerSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    img: String,
    url: String,
    available: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Header', headerSchema);