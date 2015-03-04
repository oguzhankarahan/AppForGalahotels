'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MyMapSchema = new Schema({
  hid: String,
  sid: String,
  star: String,
  hotelName: String,
  address: String,
  distance: String,
  price: {},
  latitude: String,
  longitude: String,
  active: Boolean
});

module.exports = mongoose.model('MyMap', MyMapSchema);