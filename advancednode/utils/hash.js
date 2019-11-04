const bcrypt = require('bcrypt')

const hash = (password) => bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT, 10))

module.exports = { hash, compare: bcrypt.compare }