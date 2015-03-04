'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResdetailSchema = new Schema({
  bid: String,
  hid: String,
  sid: String,
  status: String,
  hotel: [],
  roomDetails: [],
  cancellation: [],
  rewardsPayment: [],
  cardPayment: [],
  paymentDetails: [],
  guestDetails: [],
  active: Boolean
});

module.exports = mongoose.model('Resdetail', ResdetailSchema);