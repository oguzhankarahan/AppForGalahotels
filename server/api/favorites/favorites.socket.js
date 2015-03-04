/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Favorites = require('./favorites.model');

exports.register = function(socket) {
  Favorites.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Favorites.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('favorites:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('favorites:remove', doc);
}