angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MultiCtrl',  function($scope, $ionicGesture) {
  alert('Multiple Touch');
  $scope.messages = [];
  $scope.touchCount = 0;
  var touchpad = angular.element(document.querySelector('#touchpad'));
  var maxFingers = 10;
  var fingers = [];
  for(var i=0; i<maxFingers; i++)  fingers.push(angular.element(document.querySelector('#t'+i)))
  $scope.touches = new Array;
  $scope.onTouch = function(){
    $scope.touchCount += 1;
  }
  alert("ready");






});
