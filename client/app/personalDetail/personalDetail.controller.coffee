'use strict'

angular.module 'galaMobileApp'
.controller 'PersonaldetailCtrl', ($scope, Auth, $http) ->
  $scope.errors = {}
  $scope.detailButtonDisabled = false
  $scope.passwordButtonDisabled = false
  $scope.countries = []

  $http.get("/api/country").success (data) ->
    $scope.countries = data
    return

  $scope.changeDetail = (detailForm) ->
    $scope.detailButtonDisabled = true
    $scope.submitted = true

    if detailForm.$valid
      Auth.changeDetail $scope.user.username, $scope.user.country, $scope.user.address, $scope.user.gender,
                        $scope.user.surname, $scope.user.mobilePhone, $scope.user.city, $scope.user.postalCode,
                        $scope.user.contactPhone
      .then ->
        $scope.messageDetail = 'Details successfully changed.'

  $scope.changePassword = (passwordForm) ->
    $scope.passwordButtonDisabled = true
    $scope.submitted = true

    if passwordForm.$valid
      Auth.changePassword $scope.user.oldPassword, $scope.user.newPassword
      .then ->
        $scope.messagePassword = 'Password successfully changed.'

      .catch ->
        passwordForm.password.$setValidity "mongoose", false
        $scope.errors.other = "Incorrect password"
        $scope.messagePassword = ""