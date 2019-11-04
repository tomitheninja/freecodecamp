// imports
const express = require('express')

// instances
const router = express.Router()

// handlers
router.all('*', async (req, res) => {
    res.sendStatus(404)
})

// export
module.exports = router