'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FavoritesSchema = new Schema({
  hotelName: String,
  hid: String,
  photo: String,
  address: String,
  star: String,
  tripAdvisor: [],
  active: Boolean
});

module.exports = mongoose.model('Favorites', FavoritesSchema);