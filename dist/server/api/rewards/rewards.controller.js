'use strict';

var _ = require('lodash');
var Rewards = require('./rewards.model');

// Get list of rewards
exports.index = function(req, res) {
  Rewards.find(function (err, rewards) {
    if(err) { return handleError(res, err); }
    return res.json(200, rewards);
  });
};

// Get a single rewards
exports.show = function(req, res) {
  Rewards.findById(req.params.id, function (err, rewards) {
    if(err) { return handleError(res, err); }
    if(!rewards) { return res.send(404); }
    return res.json(rewards);
  });
};

// Creates a new rewards in the DB.
exports.create = function(req, res) {
  Rewards.create(req.body, function(err, rewards) {
    if(err) { return handleError(res, err); }
    return res.json(201, rewards);
  });
};

// Updates an existing rewards in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Rewards.findById(req.params.id, function (err, rewards) {
    if (err) { return handleError(res, err); }
    if(!rewards) { return res.send(404); }
    var updated = _.merge(rewards, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, rewards);
    });
  });
};

// Deletes a rewards from the DB.
exports.destroy = function(req, res) {
  Rewards.findById(req.params.id, function (err, rewards) {
    if(err) { return handleError(res, err); }
    if(!rewards) { return res.send(404); }
    rewards.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}