// imports
const mongoose = require('../../../../utils/mongoose-db')

const schema = new mongoose.Schema({
    // _id: {
    //     alias: 'short',
    //     type: 'string',
    //     required: true,
    // },
    original: {
        type: 'string',
        required: true,
    }
})

schema.virtual('short').get(function () {
    return this._id.toHexString()
})

const urlPairs = mongoose.model('urlPairs', schema)

const addNew = async (originalUrl) => {
    const { original, short } = await urlPairs.create({ original: originalUrl })
    return { original: originalUrl, short }
}

const findByShortUrl = async (short) => {
    const { original } = await urlPairs.findById(short).select('original').exec()
    return original
}



module.exports = {
    addNew,
    findByShortUrl,
}