'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
  choices: [],
  info: String,
  selections: [],
  active: Boolean
});

module.exports = mongoose.model('Feedback', FeedbackSchema);