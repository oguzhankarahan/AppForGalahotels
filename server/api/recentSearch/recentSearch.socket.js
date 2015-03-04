/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Recentsearch = require('./recentSearch.model');

exports.register = function(socket) {
  Recentsearch.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Recentsearch.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('recentSearch:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('recentSearch:remove', doc);
}