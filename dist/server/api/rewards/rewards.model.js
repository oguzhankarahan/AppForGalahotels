'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RewardsSchema = new Schema({
  rid: String,
  info: String,
  status: String,
  price: String,
  total: String,
  validDates: [],
  active: Boolean
});

module.exports = mongoose.model('Rewards', RewardsSchema);