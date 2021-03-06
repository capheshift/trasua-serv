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
    # console.log 'err', err
    res.send
      status: 'err'
      message: err

getAll = (req, res) ->
  UserBLL.getAll().then (data) ->
    res.send data

getByFacebookId = (req, res) ->
  query = req.query
  console.log 'query', query
  debug 'query', query
  UserBLL.getByFacebookId(query).then (data) ->
    debug 'data', data
    res.send
      status: 'ok'
      data: data,
  , (err) ->
    res.send
      status: 'error',
      err: err

testApp = (req, res) ->
  res.send('sanji-serv is working!')

module.exports = (app) ->
  app.post '/user/create', create
  app.get '/user/getByFacebookId', getByFacebookId
  app.get '/user/getAll', getAll
  app.get '/', testApp
