'use strict'

debug = require('debug')('user-bll')
User = require '../models/user'
mongoose = require 'mongoose'

create = (data) ->
  promise = new mongoose.Promise
  $this = this

  data.facebook = {} if (!data.facebook)

  # create function always return a promise
  User.findOne({'facebook.id': data.facebook.id}).exec().then (userData) ->
    # DEBUG
    debug 'userData', userData
    if (userData is null)
      data.userName = data.email
      User.create(data).then (user) ->
        promise.complete user
      , (err) ->
        promise.error err
    else
      data.userName = data.email
      $this.update(userData._id, data).then (user) ->
        promise.complete user
      , (err) ->
        promise.error err

  return promise

update = (id, data) ->
  User.findByIdAndUpdate(id, data).exec()

getByFacebookId = (data) ->
  data.facebook = {} if (!data.facebook)
  User.findOne({'facebook.id': data.facebook.id}).exec()

getById = (id) ->
  User.getById(id).exec()

getAll = ->
  User.find({}).exec()


module.exports = {
  create, update, getById, getAll, getByFacebookId
}
