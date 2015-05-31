'use strict'

mongooes = require 'mongoose'
passportLocal = require 'passport-local-mongoose'
Schema = mongooes.Schema

UserSchema = new Schema
  userName:
    type: String
    unique: true
    require: true

  email:
    type: String
    unique: true

  phoneNumber:
    type: String

  zodiac:
    type: String
    default: 'SAO'

  skype:
    type: String

  fullName:
    type: String

  birthday:
    type: String

  school:
    type: String

  bio:
    type: String

  avatar:
    type: String

  role:
    type: String

  facebook:
    type: Schema.Types.Mixed

  createdDate:
    type: Date
    default: Date.now

UserSchema.plugin passportLocal, {
  usernameField: 'userName',
  usernameLowerCase: true
}

module.exports = mongooes.model 'User', UserSchema
