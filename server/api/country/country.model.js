'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CountrySchema = new Schema({
  countries: {},
  active: Boolean
});

module.exports = mongoose.model('Country', CountrySchema);