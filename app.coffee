'use strict'

express = require 'express'
passport = require 'passport'
mongoose = require 'mongoose'
fs = require 'fs'


# configure express
app = express()
app.use express.json()
app.use express.urlencoded()
app.use express.cookieParser()
app.use express.session(secret: 'madoka')
app.use passport.initialize()
app.use passport.session()

require('./controllers')(app)

# configure passport
User = mongoose.model 'User'
passport.use User.createStrategy()
passport.serializeUser User.serializeUser()
passport.deserializeUser User.deserializeUser()

mongoose.connect 'mongodb://tampham47:1we23rw4t@ds043012.mongolab.com:43012/heroku_app37280303'

app.listen 4201
console.log 'Listening on port 4201...'
