'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GalacurrencySchema = new Schema({
  currencies: [],
  active: Boolean
});

module.exports = mongoose.model('Galacurrency', GalacurrencySchema);