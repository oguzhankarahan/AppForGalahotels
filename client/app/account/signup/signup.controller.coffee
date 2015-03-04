'use strict'

angular.module 'galaMobileApp'
.controller 'SignupCtrl', ($scope, Auth, $location, $window, $http) ->
  $scope.user = {}
  $scope.countries = []

  $http.get("/api/country").success (data) ->
    $scope.countries = data
    return

  $scope.errors = {}
  $scope.register = (form) ->
    $scope.submitted = true

    if form.$valid
      # Account created, redirect to home
      Auth.createUser
        name: $scope.user.name
        surname: $scope.user.surname
        email: $scope.user.email
        password: $scope.user.password
        country: $scope.user.country
        city: $scope.user.city
        mobilePhone: $scope.user.mobilePhone
        contactPhone: $scope.user.contactPhone
        postalCode: $scope.user.postalCode
        gender: $scope.user.gender
        address: $scope.user.address

      .then ->
        $location.path '/'

      .catch (err) ->
        err = err.data
        $scope.errors = {}

        # Update validity of form fields that match the mongoose errors
        angular.forEach err.errors, (error, field) ->
          form[field].$setValidity 'mongoose', false
          $scope.errors[field] = error.message

  $scope.loginOauth = (provider) ->
    $window.location.href = '/auth/' + provider
