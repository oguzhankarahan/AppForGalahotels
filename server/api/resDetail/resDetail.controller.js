'use strict';

var _ = require('lodash');
var Resdetail = require('./resDetail.model');

// Get list of resDetail
exports.index = function(req, res) {
  Resdetail.find(function (err, resDetail) {
    if(err) { return handleError(res, err); }
    return res.json(200, resDetail);
  });
};

// Get a single resDetail
exports.show = function(req, res) {
  Resdetail.findOne( {bid : req.params.bid }, function (err, resDetail) {
    if(err) { return handleError(res, err); }
    if(!resDetail) { return res.send(404); }
    return res.json(resDetail);
  });
};

// Creates a new resDetail in the DB.
exports.create = function(req, res) {
  Resdetail.create(req.body, function(err, resDetail) {
    if(err) { return handleError(res, err); }
    return res.json(201, resDetail);
  });
};

// Updates an existing resDetail in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Resdetail.findById(req.params.id, function (err, resDetail) {
    if (err) { return handleError(res, err); }
    if(!resDetail) { return res.send(404); }
    var updated = _.merge(resDetail, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, resDetail);
    });
  });
};

// Deletes a resDetail from the DB.
exports.destroy = function(req, res) {
  Resdetail.findById(req.params.id, function (err, resDetail) {
    if(err) { return handleError(res, err); }
    if(!resDetail) { return res.send(404); }
    resDetail.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}