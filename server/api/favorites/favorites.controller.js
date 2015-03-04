'use strict';

var _ = require('lodash');
var Favorites = require('./favorites.model');

// Get list of favorites
exports.index = function(req, res) {
  Favorites.find(function (err, favorites) {
    if(err) { return handleError(res, err); }
    return res.json(200, favorites);
  });
};

// Get a single favorites
exports.show = function(req, res) {
  Favorites.find(req.params.id, function (err, favorites) {
    if(err) { return handleError(res, err); }
    if(!favorites) { return res.send(404); }
    return res.json(favorites);
  });
};

// Creates a new favorites in the DB.
exports.create = function(req, res) {
  Favorites.create(req.body, function(err, favorites) {
    if(err) { return handleError(res, err); }
    return res.json(201, favorites);
  });
};

// Updates an existing favorites in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Favorites.findById(req.params.id, function (err, favorites) {
    if (err) { return handleError(res, err); }
    if(!favorites) { return res.send(404); }
    var updated = _.merge(favorites, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, favorites);
    });
  });
};

// Deletes a favorites from the DB.
exports.destroy = function(req, res) {
  Favorites.findById(req.params.id, function (err, favorites) {
    if(err) { return handleError(res, err); }
    if(!favorites) { return res.send(404); }
    favorites.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}