// imports
const { model, Schema } = require('../db/_connected-mongoose')
const shortId = require('shortid')

const userSchema = new Schema({
    _id: {
        type: String,
        default: shortId.generate,
    },
    username: {
        type: 'string',
        trim: true,
        minlength: 3,
        maxlength: 25,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        min: Date.parse('2019-06-22'),
        required: true,
    },
})

module.exports = model('users', userSchema)