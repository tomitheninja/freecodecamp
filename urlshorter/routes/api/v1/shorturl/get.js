// imports
const express = require('express')


const { findByShortUrl } = require('./_db')

// instances
const router = express.Router()

// handlers
router.get('/:short', async (req, res, next) => {
    const { short } = req.params

    if (typeof short !== 'string') {
        return res.status(400).json({
            error: 'Invalid URL',
        })

    }
    
    const original = await findByShortUrl(short)

    res.redirect(original)
})


// export
module.exports = router