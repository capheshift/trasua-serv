'use strict'

debug = require('debug')('post-bll')
GeoPoint = require 'geopoint'
PostModel = require '../models/post'

create = (data) ->
  # create function always return a promise
  PostModel.create(data)

update = (id, data) ->
  PostModel.findByIdAndUpdate(id, data).exec()

getById = (id) ->
  PostModel.findById(id).populate('_user').exec()

getAll = ->
  PostModel.find({}).sort({modified: -1}).populate('_user').exec()

getByType = (type) ->
  PostModel.find({type: type}).sort({modified: -1}).exec()

countAll = (type) ->
  PostModel.count({type: type}).exec()

getByLocation = (lat, lon, distance) ->
  curLocation = new GeoPoint(lat, lon)
  bounding = curLocation.boundingCoordinates(distance, true)
  area =
    sw: bounding[0]
    ne: bounding[1]

  debug 'bounding', bounding
  return PostModel.find({})
    .where('latitude').gt(area.sw._degLat).lt(area.ne._degLat)
    .where('longitude').gt(area.sw._degLon).lt(area.ne._degLon)
    .sort('-createdDate').populate('_user')
    .exec()


module.exports = {
  create, update,
  getById, getAll, getByType,
  countAll,
  getByLocation
}
