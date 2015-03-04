/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bookings = require('./bookings.model');

exports.register = function(socket) {
  Bookings.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Bookings.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bookings:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bookings:remove', doc);
}