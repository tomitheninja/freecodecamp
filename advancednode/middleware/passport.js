// imports
const passport = require('passport')
const LocalStrategy = require('passport-local')

const User = require('../models/user')
const bcrypt = require('../utils/hash')

// strategy definitions
async function myLocalStrategy (username, password, done) {
  User.findOne({ username }, async (err, user) => {
    if (err) return done(err)
    if (!user) return done(null, false, { error: 'Incorrect username.' })
    try {
      const passwordOk = await bcrypt.compare(password, user.passwordHash)
      if (!passwordOk) return done(null, false, { message: 'Incorrect password.' })
      return done(null, user)
    } catch (err) { return done(err) }
  })
}

// strategy instances & binds
passport.use(new LocalStrategy(myLocalStrategy))

// (de)serialize
passport.serializeUser(function(user, cb) {
  cb(null, user.id)
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err) }
    cb(null, user)
  })
})

// exports
module.exports = passport