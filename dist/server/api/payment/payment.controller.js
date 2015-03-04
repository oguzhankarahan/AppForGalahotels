'use strict';

var _ = require('lodash');
var Payment = require('./payment.model');

// Get list of payment
exports.index = function(req, res) {
  Payment.find(function (err, payment) {
    if(err) { return handleError(res, err); }
    return res.json(200, payment);
  });
};

// Get a single payment
exports.show = function(req, res) {
  Payment.findOne( {hid : req.params.hid }, function (err, payment) {
    if(err) { return handleError(res, err); }
    if(!payment) { return res.send(404); }
    return res.json(payment);
  });
};

// Creates a new payment in the DB.
exports.create = function(req, res) {
  Payment.create(req.body, function(err, payment) {
    if(err) { return handleError(res, err); }
    return res.json(201, payment);
  });
};

// Updates an existing payment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Payment.findById(req.params.id, function (err, payment) {
    if (err) { return handleError(res, err); }
    if(!payment) { return res.send(404); }
    var updated = _.merge(payment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, payment);
    });
  });
};

// Deletes a payment from the DB.
exports.destroy = function(req, res) {
  Payment.findById(req.params.id, function (err, payment) {
    if(err) { return handleError(res, err); }
    if(!payment) { return res.send(404); }
    payment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}