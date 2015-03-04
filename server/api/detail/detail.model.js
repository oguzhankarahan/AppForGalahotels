'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DetailSchema = new Schema({
    hid             : String,
    sid             : String,
    star            : String,
    name            : String,
    cancellation    : String,
    address         : String,
    tripAdvisor     : {},
    amenities       : {},
    price           : {},
    info            : {},
    roomsRate       : {},
    city            : {},
    country         : {},
    images          : [],
    active          : Boolean
});

module.exports = mongoose.model('Detail', DetailSchema);