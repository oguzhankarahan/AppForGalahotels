/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Resdetail = require('./resDetail.model');

exports.register = function(socket) {
  Resdetail.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Resdetail.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('resDetail:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('resDetail:remove', doc);
}