// imports
const {
  model,
  Schema
} = require('mongoose')

const userSchema = new Schema({
  username: {
    type: 'string',
    required: true,
    unique: true,
    index: true,
    minlength: 3,
    maxlength: 50,
    trim: true,
    lowercase: true,
  },
  passwordHash: {
    type: 'string',
    required: true,
  }
})



// export the model
module.exports = model('users', userSchema)
