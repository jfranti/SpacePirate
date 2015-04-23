spacePirates.controller('StatusCtrl', function StatusCtrl($scope, StatusFactory) {
  $scope.StatusFactory = StatusFactory;
  $scope.life_support = StatusFactory.life_support;
  $scope.sail = StatusFactory.sail;
  $scope.lifeform = StatusFactory.lifeform;
  //change the properies methods here

  $scope.disableLifeSupport = function() {
    $scope.life_support = "Disabled";
  }


  $scope.update_lifeform = function() {
    StatusFactory.update_lifeform();
  }




});
