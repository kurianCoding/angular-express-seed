'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  }).
  controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  }).
  controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  }).
 controller("helloController",function($scope){
	// items="\[\{\"text\":\"google,url:http://google.co.in\"\}\{\"text\":\"ebay\",\"url\":\"www.ebay.in\"\}\{\"text\":\"quora\",\"url\":\"www.quora.com\"\}\{\"text\":\"linkedin\",\"url\":\"http://linkedin.com\"\}:\]";
	var items="\[\{\"text\":\"hello\",\"url\":\"http://localhost.com\"\}\]";
	 $scope.itemList=JSON.parse(items);
//$scope.itemList=$http.get(https://api.twitter.com/1.1/search/tweets.json);
 });
