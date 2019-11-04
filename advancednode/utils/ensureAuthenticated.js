
// Factory
const ensureAuthenticatedFactory = (failHandler) => {
  return function ensureAuthenticatedFactoryWorker (req, res, next) {
    if (!req.isAuthenticated()) return failHandler(req, res, next)
    next()
  }
}

module.exports = {
  html: ensureAuthenticatedFactory((req, res, next) => res.redirect('/')),
  api: ensureAuthenticatedFactory((req, res, next) => res.json({error: 'Please log in'})),
}