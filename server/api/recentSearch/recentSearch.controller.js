'use strict';

var _ = require('lodash');
var Recentsearch = require('./recentSearch.model');

// Get list of recentSearch
exports.index = function(req, res) {
  Recentsearch.find(function (err, recentSearch) {
    if(err) { return handleError(res, err); }
    return res.json(200, recentSearch);
  });
};

// Get a single recentSearch
exports.show = function(req, res) {
  Recentsearch.findById(req.params.id, function (err, recentSearch) {
    if(err) { return handleError(res, err); }
    if(!recentSearch) { return res.send(404); }
    return res.json(recentSearch);
  });
};

// Creates a new recentSearch in the DB.
exports.create = function(req, res) {
  Recentsearch.create(req.body, function(err, recentSearch) {
    if(err) { return handleError(res, err); }
    return res.json(201, recentSearch);
  });
};

// Updates an existing recentSearch in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Recentsearch.findById(req.params.id, function (err, recentSearch) {
    if (err) { return handleError(res, err); }
    if(!recentSearch) { return res.send(404); }
    var updated = _.merge(recentSearch, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, recentSearch);
    });
  });
};

// Deletes a recentSearch from the DB.
exports.destroy = function(req, res) {
  Recentsearch.findById(req.params.id, function (err, recentSearch) {
    if(err) { return handleError(res, err); }
    if(!recentSearch) { return res.send(404); }
    recentSearch.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}