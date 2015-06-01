'use strict'

debug = require('debug')('user-bll')
User = require '../models/user'
mongoose = require 'mongoose'
moment = require 'moment'

getZodiac = (birthday) ->
  birthStr = moment(birthday, 'MM/DD/YYYY').format('MMDD')
  zodiac = {}
  if (birthStr >= '0312' && birthStr <= '0419')
    zodiac.key = 'bach-duong'
    zodiac.name = 'Bạch Dương'

  if (birthStr >= '0420' && birthStr <= '0520')
    zodiac.key = 'kim-nguu'
    zodiac.name = 'Kim Ngưu'

  if (birthStr >= '0521' && birthStr <= '0621')
    zodiac.key = 'song-tu'
    zodiac.name = 'Song Tử'

  if (birthStr >= '0622' && birthStr <= '0722')
    zodiac.key = 'cu-giai'
    zodiac.name = 'Cự Giải'

  if (birthStr >= '0723' && birthStr <= '0822')
    zodiac.key = 'su-tu'
    zodiac.name = 'Sư Tử'

  if (birthStr >= '0823' && birthStr <= '0923')
    zodiac.key = 'xu-nu'
    zodiac.name = 'Xử Nữ'

  if (birthStr >= '0924' && birthStr <= '1023')
    zodiac.key = 'thien-binh'
    zodiac.name = 'Thiên Bình'

  if (birthStr >= '1024' && birthStr <= '1122')
    zodiac.key = 'bo-cap'
    zodiac.name = 'Bọ Cạp'

  if (birthStr >= '1123' && birthStr <= '1221')
    zodiac.key = 'nhan-ma'
    zodiac.name = 'Nhân Mã'

  if (birthStr >= '0120' && birthStr <= '0218')
    zodiac.key = 'bao-binh'
    zodiac.name = 'Bảo Bình'

  if (birthStr >= '0219' && birthStr <= '0320')
    zodiac.key = 'song-ngu'
    zodiac.name = 'Song Ngư'

  # if (birthStr >= '1222' && birthStr <= '0119')
  # because it's difficult to compare ma-ket, it pass through 2 year
  if (zodiac.key is undefined)
    zodiac.key = 'ma-ket'
    zodiac.name = 'Ma Kết'

  return zodiac

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
      zodiac = getZodiac(data.birthday)
      data.zodiac = zodiac.name
      data.zodiacKey = zodiac.key

      User.create(data).then (user) ->
        promise.complete user
      , (err) ->
        promise.error err
    else
      data.userName = data.email
      zodiac = getZodiac(data.birthday)
      data.zodiac = zodiac.name
      data.zodiacKey = zodiac.key

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
