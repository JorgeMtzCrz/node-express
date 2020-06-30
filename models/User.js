const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema({
    email: String,
    name: String,
    address: String,
    contact: String,
    phone: Number,
    mobile: Number,
    img: String,
    payment: Number,
    effective: Number,
    role: {
        type: String,
        enum: ['SUPER-ADMIN', 'ADMIN', 'TEAM-MATE', 'CLIENT'],
        default: 'ADMIN'
    },
    tags: [String],
    purchases: [String]

}, {
    timestamps: true,
    versionKey: false
});

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);