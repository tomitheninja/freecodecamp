// imports
const { model, Schema } = require('../db/_connected-mongoose')
const shortId = require('shortid')

const exerciseSchema = new Schema({
    userId: {
        type: String,
        required: true,
        validate: shortId.isValid,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    },
    duration: {
        type: Number,
        required: true,
        set: x => Math.round(x)
    },
    date: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        min: Date.parse('2019-06-22'),
        required: true,
    },
})

module.exports = model('exercises', exerciseSchema)