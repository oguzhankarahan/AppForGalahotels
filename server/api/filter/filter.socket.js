/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Filter = require('./filter.model');

exports.register = function(socket) {
  Filter.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Filter.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('filter:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('filter:remove', doc);
}