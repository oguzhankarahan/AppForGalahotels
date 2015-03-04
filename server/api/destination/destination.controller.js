'use strict';

var _ = require('lodash');
var Destination = require('./destination.model');

// Get list of destination
exports.index = function(req, res) {
  Destination.find(function (err, destination) {
    if(err) { return handleError(res, err); }
    return res.json(200, destination);
  });
};

// Get a single destination
exports.show = function(req, res) {
  Destination.findById(req.params.id, function (err, destination) {
    if(err) { return handleError(res, err); }
    if(!destination) { return res.send(404); }
    return res.json(destination);
  });
};

// Creates a new destination in the DB.
exports.create = function(req, res) {
  Destination.create(req.body, function(err, destination) {
    if(err) { return handleError(res, err); }
    return res.json(201, destination);
  });
};

// Updates an existing destination in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Destination.findById(req.params.id, function (err, destination) {
    if (err) { return handleError(res, err); }
    if(!destination) { return res.send(404); }
    var updated = _.merge(destination, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, destination);
    });
  });
};

// Deletes a destination from the DB.
exports.destroy = function(req, res) {
  Destination.findById(req.params.id, function (err, destination) {
    if(err) { return handleError(res, err); }
    if(!destination) { return res.send(404); }
    destination.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}