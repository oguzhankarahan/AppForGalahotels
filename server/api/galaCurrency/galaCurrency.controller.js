'use strict';

var _ = require('lodash');
var Galacurrency = require('./galaCurrency.model');

// Get list of galaCurrency
exports.index = function(req, res) {
  Galacurrency.find(function (err, galaCurrency) {
    if(err) { return handleError(res, err); }
    return res.json(200, galaCurrency);
  });
};

// Get a single galaCurrency
exports.show = function(req, res) {
  Galacurrency.findById(req.params.id, function (err, galaCurrency) {
    if(err) { return handleError(res, err); }
    if(!galaCurrency) { return res.send(404); }
    return res.json(galaCurrency);
  });
};

// Creates a new galaCurrency in the DB.
exports.create = function(req, res) {
  Galacurrency.create(req.body, function(err, galaCurrency) {
    if(err) { return handleError(res, err); }
    return res.json(201, galaCurrency);
  });
};

// Updates an existing galaCurrency in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Galacurrency.findById(req.params.id, function (err, galaCurrency) {
    if (err) { return handleError(res, err); }
    if(!galaCurrency) { return res.send(404); }
    var updated = _.merge(galaCurrency, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, galaCurrency);
    });
  });
};

// Deletes a galaCurrency from the DB.
exports.destroy = function(req, res) {
  Galacurrency.findById(req.params.id, function (err, galaCurrency) {
    if(err) { return handleError(res, err); }
    if(!galaCurrency) { return res.send(404); }
    galaCurrency.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}