/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Payment = require('./payment.model');

exports.register = function(socket) {
  Payment.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Payment.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('payment:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('payment:remove', doc);
}