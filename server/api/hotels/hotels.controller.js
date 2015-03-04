'use strict';

var _ = require('lodash');
var Hotels = require('./hotels.model');

// Get list of hotels
exports.index = function(req, res) {
  Hotels.find(function (err, hotels) {
    if(err) { return handleError(res, err); }
    return res.json(200, hotels);
  });
};

// Get a single hotels
exports.show = function(req, res) {
  Hotels.findById(req.params.id, function (err, hotels) {
    if(err) { return handleError(res, err); }
    if(!hotels) { return res.send(404); }
    return res.json(hotels);
  });
};

// Creates a new hotels in the DB.
exports.create = function(req, res) {
  Hotels.create(req.body, function(err, hotels) {
    if(err) { return handleError(res, err); }
    return res.json(201, hotels);
  });
};

// Updates an existing hotels in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Hotels.findById(req.params.id, function (err, hotels) {
    if (err) { return handleError(res, err); }
    if(!hotels) { return res.send(404); }
    var updated = _.merge(hotels, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, hotels);
    });
  });
};

// Deletes a hotels from the DB.
exports.destroy = function(req, res) {
  Hotels.findById(req.params.id, function (err, hotels) {
    if(err) { return handleError(res, err); }
    if(!hotels) { return res.send(404); }
    hotels.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}