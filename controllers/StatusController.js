spacePirates.controller('StatusCtrl', function StatusCtrl($scope, StatusFactory) {
  $scope.StatusFactory = StatusFactory;
  $scope.life_support = StatusFactory.life_support;
  $scope.sail = StatusFactory.sail;
  $scope.lifeform = StatusFactory.lifeform;
  $scope.bulkheads = StatusFactory.bulkheads;
  $scope.power = StatusFactory.power;

  //change the properies methods here

  $scope.disableLifeSupport = function() {
    $scope.life_support = "Disabled";
  }


  $scope.update_lifeform_count = function() {
    StatusFactory.update_lifeform_count();
  }

  $scope.seal_bulkheads = function() {
    StatusFactory.seal_bulkheads();
  }

  $scope.vent_engine_room = function() {
    if ($scope.bulkheads === "open") {
      //death
    }
    else {
      StatusFactory.vent_engine_room();
    }
  }
});
