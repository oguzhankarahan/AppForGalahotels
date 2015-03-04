/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Rewards = require('./rewards.model');

exports.register = function(socket) {
  Rewards.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Rewards.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('rewards:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('rewards:remove', doc);
}