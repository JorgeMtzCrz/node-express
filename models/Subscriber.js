const { Schema, model } = require('mongoose');

const subscriberSchema = new Schema({
    email: String,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Subscriber', subscriberSchema);