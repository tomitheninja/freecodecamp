// imports
const session = require('./session')
const passport = require('./passport')
// const fccTester = require('./fcc-tester')

// worker
const mountMiddleware = (app) => {
  // FreeCodeCamp tester
  // fccTester(app)

  // Session
  app.use(session())

  // Passport
  app.use(passport.initialize())
  app.use(passport.session())

  // Return self for chaining
  return app
}

// exports
module.exports = mountMiddleware
