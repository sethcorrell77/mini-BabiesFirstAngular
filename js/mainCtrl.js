var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
  $scope.friends = ["Tyler", "Trevor", "Mike", "Dave", "Josh"];

});