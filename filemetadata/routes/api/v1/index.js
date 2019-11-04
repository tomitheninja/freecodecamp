// imports
const express = require('express')

const fileanalyseRouter = require('./fileanalyse')

// instances
const router = express.Router()

// handlers
router.use('/fileanalyse', fileanalyseRouter)


router.use(async (err, req, res, next) => {
    console.error(err)
    res.send({error: err.message})
})

// export
module.exports = router