'use strict'

debug = require('debug')('post-controller')
PostBLL = require '../business/post'

create = (req, res) ->
  data = req.body
  debug 'controller/create', data

  PostBLL.create(data).then (data) ->
    res.send data

getById = (req, res) ->
  debug 'controller/getById', req.query.id

  id = req.query.id
  PostBLL.getById(id).then (data) ->
    res.send data

getAll = (req, res) ->
  debug 'controller/getAll'
  PostBLL.getAll().then (data) ->
    res.send data || []

getByLocation = (req, res) ->
  q = req.query
  q.lat = parseFloat(q.latitude)
  q.lon = parseFloat(q.longitude)
  debug 'getByLocation', q
  PostBLL.getByLocation(q.lat, q.lon, 1.5).then (data) ->
    res.send data
  , (err) ->
    res.send
      err: err

module.exports = (app) ->
  app.post '/post/create', create
  app.get '/post/getall', getAll
  app.get '/post/getById', getById
  app.get '/post/getByLocation', getByLocation
