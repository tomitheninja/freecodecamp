// imports
const express = require('express')
const bodyParser = require('body-parser')

const { Exercise, User } = require('../../../../models')

// instances
const router = express.Router()

// middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

// handlers
router.post('/new-user', async (req, res, next) => {
    const { username } = req.body
    try {
        if (!username) throw new Error('Field `username` should not be empty')
        const { _id } = await User.create({ username })
        res.json({ _id, username })
    } catch (err) {
        next(err)
    }
})

router.get('/users', async (req, res) => {
    try {
        const result = await User.find().select(['userName']).exec()
        res.json(result.map(({_id, userName}) => ({_id, username: userName})))
    } catch (err) {
        next(err)
    }
})

router.post('/add', async (req, res, next) => {
    const { userId, description, duration, date } = req.body
    try {
        if(!userId) throw new Error('Field `userId` should not be empty')
        if(!description) throw new Error('Field `description` should not be empty')
        if(!duration) throw new Error('Field `duration` should not be empty')
        const withDate = date ? {date} : {}
        const user = await User.findById(userId).select(['username']).exec()
        if (!user) throw new Error('Unknown user')
        const result = await Exercise.create({userId, description, duration, ...withDate})
        res.json({
            _id: userId,
            username: user.username,
            exercise: {
                description: result.description,
                duration: result.duration,
                date: result.date,
            },
        })
    } catch (err) {
        next(err)
    }
})


router.get('/log', async (req, res, next) => {
    const { userId, from, to, limit } = req.query
    let shouldLimit = false
    try {
        if(!userId) throw new Error('Field `userId` should not be empty')
        if (from && Number.isNaN(Date.parse(from))) throw new Error('Field `from` is not a date')
        if (to && Number.isNaN(Date.parse(to))) throw new Error('Field `to` is not a date')
        if (typeof limit !== 'undefined') {
            shouldLimit = true
            const parsedLimit = Number(limit)
            if (!Number.isInteger(parsedLimit) || parsedLimit < 0) {
                throw new Error('Field `limit` should is not a positive int')
            } 
        }
        const user = await User.findById(userId).select(['username']).exec()
        if (!user) throw new Error('Unknown user')

        const id = { userId, date: {$exists: true} }
        if (from) id.date['$gte'] = from
        if (to) id.date['$lte'] = to

        const qAll = Exercise.find(id)

        const qFinal = shouldLimit ? qAll.limit(Number(limit)) : qAll

        const exercises = await qFinal.exec()

        res.json({
            _id: userId,
            username: user.username,
            count: exercises.length,
            log: exercises.map(({description, duration, date}) => ({description, duration, date})),
        })
    } catch (err) {
        next(err)
    }
})

// exports
module.exports = router