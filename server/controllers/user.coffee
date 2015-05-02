'use strict'

debug = require('debug')('user-controller')
UserBLL = require '../business/user'

create = (req, res) ->
  data = req.body
  UserBLL.create(data).then (user) ->
    res.send
      status: 'ok'
      data: user
  , (err) ->
    console.log 'err', err
    res.send
      status: 'err'
      message: err

getAll = (req, res) ->
  UserBLL.getAll().then (data) ->
    res.send data

module.exports = (app) ->
  app.post '/user/create', create
  app.get '/user/getAll', getAll
