'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentSchema = new Schema({
  hid: String,
  sid: String,
  hotel: [],
  roomsRate: [],
  cancellation: [],
  rewardsPayment: [],
  cardPayment: [],
  guestsName: [],
  active: Boolean
});

module.exports = mongoose.model('Payment', PaymentSchema);