/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Detail = require('./detail.model.js');

exports.register = function(socket) {
  Detail.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Detail.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('detail:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('detail:remove', doc);
}