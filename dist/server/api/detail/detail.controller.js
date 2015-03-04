'use strict';

var _ = require('lodash');
var Detail = require('./detail.model.js');

// Get list of details
exports.index = function(req, res) {
  Detail.find(function (err, detail) {
    if(err) { return handleError(res, err); }
    return res.json(200, detail);
  });
};

// Get a single detail
exports.show = function(req, res) {
  Detail.findOne( {hid : req.params.hid }, function (err, detail) {
    if(err) { return handleError(res, err); }
    if(!detail) { return res.send(404); }
    return res.json(detail);
  });
};

// Creates a new detail in the DB.
exports.create = function(req, res) {
  Detail.create(req.body, function(err, detail) {
    if(err) { return handleError(res, err); }
    return res.json(201, detail);
  });
};

// Updates an existing detail in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Detail.findById(req.params.id, function (err, detail) {
    if (err) { return handleError(res, err); }
    if(!detail) { return res.send(404); }
    var updated = _.merge(detail, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, detail);
    });
  });
};

// Deletes a detail from the DB.
exports.destroy = function(req, res) {
  Detail.findById(req.params.id, function (err, detail) {
    if(err) { return handleError(res, err); }
    if(!detail) { return res.send(404); }
    detail.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}