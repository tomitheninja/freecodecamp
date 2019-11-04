// imports
const express = require('express')
const bodyParser = require('body-parser')
const { lookup } = require('dns')

const { addNew } = require('./_db')

// instances
const router = express.Router()

// middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

// helpers
const urlRegExp = /^(http(s?):\/\/)?([a-z0-9]{1,}\.)+[a-z0-9]{2,}(\/[^\s]*)*$/i

const isValidUrl = async (url) => {
    try {

        if (typeof url !== 'string') return false
        if (!urlRegExp.test(url)) return false
        // TODO: dns-lookup
     
        const { host } = new URL(url)

        await new Promise((res, rej) => (
            lookup(host, err => err ? rej(err) : res())
        ))

        return true
    } catch {
        return false
    }
    return true
}

// handlers
router.post('//', async (req, res, next) => {
    let { url } = req.body

    if (!await isValidUrl(url)) {
        return res.status(400).send({
            error: 'invalid URL'
        })
    }

    const { original, short } = await addNew(url)

    res.json({
        original_url: original,
        short_url: short,
    })
})

router.all(async (error, req, res, next) => {
    res.sendStatus(500)
})


// export
module.exports = router