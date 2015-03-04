/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Feedback = require('./feedback.model');

exports.register = function(socket) {
  Feedback.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Feedback.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('feedback:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('feedback:remove', doc);
}