// imports
const session = require('express-session')
const MongoStoreFactory = require('connect-mongo')

const sessionMongoose = require('mongoose')

// instances
const MongoStore = MongoStoreFactory(session)
const sessionStore = new MongoStore({
  mongooseConnection: sessionMongoose.connection
})

module.exports = () => session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
})
