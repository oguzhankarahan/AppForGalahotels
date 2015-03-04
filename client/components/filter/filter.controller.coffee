'use strict'

angular.module 'galaMobileApp'
.controller 'filterCtrl', ($scope, $http, $location) ->

  $scope.currentPath = $location.path()
  $scope.filterButtonDisabled = false
  $scope.searchButtonDisabled = false

  $scope.filters = []
  $http.get("/api/filter").success (data) ->
    $scope.filters = data
    return
  $scope.search = []

  $http.get("/api/search").success (data) ->
    $scope.search = data
    return
  $scope.recentSearches = []
  $http.get("/api/recentSearch").success (data) ->
    $scope.recentSearches = data
    return

  $scope.recentSearchFunc = (recentSearchForm) ->
    $scope.searchButtonDisabled = true

    $scope.recentSearchForm = {}
    $scope.recentSearchForm.state = {}
    $scope.recentSearchForm.date = {}
    $scope.recentSearchForm.person = {}
    $scope.recentSearchForm.person.roomID = {}
    $scope.recentSearchForm.state.country = $scope.recentSearches[0].country.name
    $scope.recentSearchForm.state.city = $scope.recentSearches[0].city
    $scope.recentSearchForm.date.fromDate = $scope.recentSearches[0].checkIn
    $scope.recentSearchForm.date.untilDate = $scope.recentSearches[0].checkOut
    $scope.recentSearchForm.person.room = $scope.recentSearches[0].rooms.room
    $scope.recentSearchForm.person.roomID = $scope.recentSearches[0].rooms.person
    $scope.recentSearchForm.person.roomID = $scope.recentSearches[0].rooms.person


    return  if $scope.recentSearchForm.state is "" & $scope.recentSearchForm.date is "" & $scope.recentSearchForm.person is ""
    $http.post "/api/recentSearch",
      state : $scope.recentSearchForm.state
      date : $scope.recentSearchForm.date
      person : $scope.recentSearchForm.person

    $scope.state = ""
    $scope.date = ""
    $scope.person = ""
    return

  $scope.filterFunc = (filterForm) ->
    $scope.filterButtonDisabled = true
    return  if $scope.filterForm.hotelName is "" & $scope.filterForm.filter is "" & $scope.filterForm.price is ""
    $http.post "/api/filter",
      hotelName : $scope.filterForm.hotelName
      filter : $scope.filterForm.filter
      price : $scope.filterForm.price

    $scope.hotelName = ""
    $scope.filter = ""
    $scope.price = ""
  return
