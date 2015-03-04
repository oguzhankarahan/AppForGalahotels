'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DestinationSchema = new Schema({
  continent: [],
  active: Boolean
});

module.exports = mongoose.model('Destination', DestinationSchema);