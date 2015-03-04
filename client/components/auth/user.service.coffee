'use strict'

angular.module 'galaMobileApp'
.factory 'User', ($resource) ->
  $resource '/api/users/:id/:controller',
    id: '@_id'
  ,
    changeDetail:
      method: 'PUT'
      params:
        controller: 'changeDetail'

    get:
      method: 'GET'
      params:
        id: 'me'


.factory 'UserPass', ($resource) ->
  $resource '/api/users/:id/:controller',
    id: '@_id'
  ,
    changePassword:
      method: 'PUT'
      params:
        controller: 'changePassword'

    get:
      method: 'GET'
      params:
        id: 'me'
