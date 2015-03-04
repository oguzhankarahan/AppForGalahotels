/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Hotels = require('./hotels.model');

exports.register = function(socket) {
  Hotels.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Hotels.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('hotels:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('hotels:remove', doc);
}