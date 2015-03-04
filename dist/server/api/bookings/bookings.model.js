'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookingsSchema = new Schema({
  bid: String,
  status: String,
  hotelName: String,
  city: String,
  checkIn: String,
  checkOut: String,
  total: String,
  active: Boolean
});

module.exports = mongoose.model('Bookings', BookingsSchema);