const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validator(validEmail) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(
            validEmail
        );
    },
    message: "please enter a valid email"

  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
      }
    ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User'
      }
  ]
  },
  { 
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

const User = model('User', UserSchema);

module.exports = User;