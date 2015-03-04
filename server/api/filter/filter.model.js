'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FilterSchema = new Schema({
  star: [],
  price: [],
  reviews: [],
  landmark: [],
  active: Boolean
});

module.exports = mongoose.model('Filter', FilterSchema);