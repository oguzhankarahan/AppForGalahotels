/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Destination = require('./destination.model');

exports.register = function(socket) {
  Destination.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Destination.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('destination:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('destination:remove', doc);
}