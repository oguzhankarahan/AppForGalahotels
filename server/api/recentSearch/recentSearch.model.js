'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RecentsearchSchema = new Schema({
  city: String,
  country: {},
  checkIn: String,
  checkOut: String,
  rooms: {},
  active: Boolean
});

module.exports = mongoose.model('Recentsearch', RecentsearchSchema);