/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var MyMap = require('./myMap.model');

exports.register = function(socket) {
  MyMap.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  MyMap.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('myMap:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('myMap:remove', doc);
}