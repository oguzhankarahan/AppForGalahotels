/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Galacurrency = require('./galaCurrency.model');

exports.register = function(socket) {
  Galacurrency.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Galacurrency.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('galaCurrency:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('galaCurrency:remove', doc);
}