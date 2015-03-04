'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HotelsSchema = new Schema({
  hid           : String,
  name          : String,
  star          : String,
  address       : String,
  sid           : String,
  price         : {},
  roomsRate     : {},
  tripAdvisor   : {},
  pic           : String,
  active        : Boolean
});

module.exports = mongoose.model('Hotels', HotelsSchema);