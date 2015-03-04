'use strict';

var _ = require('lodash');
var Bookings = require('./bookings.model');

// Get list of bookings
exports.index = function(req, res) {
  Bookings.find(function (err, bookings) {
    if(err) { return handleError(res, err); }
    return res.json(200, bookings);
  });
};

// Get a single bookings
exports.show = function(req, res) {
  Bookings.findById(req.params.id, function (err, bookings) {
    if(err) { return handleError(res, err); }
    if(!bookings) { return res.send(404); }
    return res.json(bookings);
  });
};

// Creates a new bookings in the DB.
exports.create = function(req, res) {
  Bookings.create(req.body, function(err, bookings) {
    if(err) { return handleError(res, err); }
    return res.json(201, bookings);
  });
};

// Updates an existing bookings in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bookings.findById(req.params.id, function (err, bookings) {
    if (err) { return handleError(res, err); }
    if(!bookings) { return res.send(404); }
    var updated = _.merge(bookings, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bookings);
    });
  });
};

// Deletes a bookings from the DB.
exports.destroy = function(req, res) {
  Bookings.findById(req.params.id, function (err, bookings) {
    if(err) { return handleError(res, err); }
    if(!bookings) { return res.send(404); }
    bookings.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}