// imports
const express = require('express')
const { readFile } = require('fs')
const { join } = require('path')

// instances
const router = express.Router()
const filePath = join(__dirname, '../../views/index.html')

// handlers
router.get('/', async (req, res, next) => {
    res.sendFile(filePath, async (err) => {
        if (err) return next(err)
    })
})

// export
module.exports = router