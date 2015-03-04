'use strict'

angular.module 'galaMobileApp'
.controller 'MainCtrl', ($scope, $http) ->
  $scope.countries = []

  $http.get("/api/country").success (data) ->
    $scope.countries = data
    return
  $scope.search = []

  $http.get("/api/search").success (data) ->
    $scope.search = data
    return

  $scope.buttonDisabled = false

  $scope.searchFunc = (searchForm) ->
    $scope.buttonDisabled = true
    return  if $scope.searchForm.state is "" & $scope.searchForm.date is "" & $scope.searchForm.person is ""
    $http.post "/api/search",
      state : $scope.searchForm.state
      date : $scope.searchForm.date
      person : $scope.searchForm.person



    $scope.state = ""
    $scope.date = ""
    $scope.person = ""
  return



#  $scope.awesomeThings = []
#  $http.get('/api/things').success (awesomeThings) ->
#    $scope.awesomeThings = awesomeThings
#    socket.syncUpdates 'thing', $scope.awesomeThings
#
#  $scope.addThing = ->
#    return if $scope.newThing is ''
#    $http.post '/api/things',
#      name: $scope.newThing
#
#    $scope.newThing = ''
#
#  $scope.deleteThing = (thing) ->
#    $http.delete '/api/things/' + thing._id
#
#  $scope.$on '$destroy', ->
#    socket.unsyncUpdates 'thing'
