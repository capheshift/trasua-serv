'use strict'

PostBLL = require '../business/post'

create = (req, res) ->
  data = req.body
  console.log 'controller/create', data

  PostBLL.create(data).then (data) ->
    res.send data

getById = (req, res) ->
  console.log 'controller/getById', req.query.id

  id = req.query.id
  PostBLL.getById(id).then (data) ->
    res.send data

getAll = (req, res) ->
  console.log 'controller/getAll'
  PostBLL.getAll().then (data) ->
    res.send data || []

getByLocation = (req, res) ->
  PostBLL.getByLocation(40.689604, -74.04455, 0.5).then (data) ->
    res.send data

module.exports = (app) ->
  app.post '/post/create', create
  app.get '/post/getall', getAll
  app.get '/post/getById', getById
  app.get '/post/getByLocation', getByLocation
