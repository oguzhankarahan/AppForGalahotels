'use strict'

angular.module 'galaMobileApp'
.controller 'MapCtrl', ($scope, $http, $location) ->
  $scope.currentPath = $location.path()
  $scope.maps = []

  $http.get("/api/myMap").success (result) ->
    $scope.maps = result
    return

  $scope.select = (item) ->
    $scope.selected = item
    return

  $scope.selected = {}

.directive "myMaps", ($timeout) ->
  restrict: "E"
  template: "<div></div>"
  replace: true
  link: (scope, element, attrs) ->
    scope.$watchCollection "selected", ->
      lat = scope.selected.latitude or -31.9543365
      lon = scope.selected.longitude or 115.894217
      myLatLng = new google.maps.LatLng(lat, lon)
      mapOptions =
        center: myLatLng
        zoom: 12
        myTypeId: google.maps.MapTypeId.ROADMAP

      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions)
      marker = new google.maps.Marker(
        position: myLatLng
        map: map
        title: "my town"
      )
      marker.setMap map
      return

    return