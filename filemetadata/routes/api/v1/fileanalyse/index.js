// import
const fs = require('fs')
const express = require('express')
const multer = require('multer')


// instances
const router = express.Router()
const upload = multer({ dest: '/tmp/uploads' })

const uploadParser = upload.single('upfile')

// middleware

// handlers
router.post('/', [uploadParser, async (req, res, next) => {
    const { originalname: name, mimetype: type, path, size } = req.file
    res.send({name, type, size})
    fs.unlink(path, (err) => {
        if (err) throw err
    })
}])

// exports
module.exports = router