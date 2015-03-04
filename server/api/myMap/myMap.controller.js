'use strict';

var _ = require('lodash');
var MyMap = require('./myMap.model');

// Get list of myMap
exports.index = function(req, res) {
  MyMap.find(function (err, myMap) {
    if(err) { return handleError(res, err); }
    return res.json(200, myMap);
  });
};

// Get a single myMap
exports.show = function(req, res) {
  MyMap.findById(req.params.id, function (err, myMap) {
    if(err) { return handleError(res, err); }
    if(!myMap) { return res.send(404); }
    return res.json(myMap);
  });
};

// Creates a new myMap in the DB.
exports.create = function(req, res) {
  MyMap.create(req.body, function(err, myMap) {
    if(err) { return handleError(res, err); }
    return res.json(201, myMap);
  });
};

// Updates an existing myMap in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MyMap.findById(req.params.id, function (err, myMap) {
    if (err) { return handleError(res, err); }
    if(!myMap) { return res.send(404); }
    var updated = _.merge(myMap, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, myMap);
    });
  });
};

// Deletes a myMap from the DB.
exports.destroy = function(req, res) {
  MyMap.findById(req.params.id, function (err, myMap) {
    if(err) { return handleError(res, err); }
    if(!myMap) { return res.send(404); }
      myMap.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}