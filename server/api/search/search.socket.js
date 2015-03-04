/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Search = require('./search.model');

exports.register = function(socket) {
  Search.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Search.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('search:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('search:remove', doc);
}