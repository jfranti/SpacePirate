spacePirates.controller('StatusCtrl', function StatusCtrl($scope, StatusFactory) {
  $scope.StatusFactory = StatusFactory;
  $scope.life_support = StatusFactory.life_support;
  $scope.sail = StatusFactory.sail;
  $scope.lifeform = StatusFactory.lifeform;
  $scope.bulkheads = StatusFactory.bulkheads;
  $scope.power = StatusFactory.power;
  $scope.eng_comp_status = StatusFactory.eng_comp_status;
  $scope.atmo_pressure = StatusFactory.atmo_pressure;

  //change the properies methods here

  $scope.disableLifeSupport = function() {
    $scope.life_support = "Disabled";
  }


  $scope.update_lifeform_count = function() {
    if ($scope.lifeform === "undefined") {
      StatusFactory.update_lifeform_count();
    }
  }

  $scope.seal_bulkheads = function() {
    StatusFactory.seal_bulkheads();
  }

  $scope.open_bulkheads = function() {
    StatusFactory.open_bulkheads();
  }

  $scope.vent_engine_room = function() {
    if ($scope.bulkheads === "sealed") {
      StatusFactory.vent_engine_room();
    }
  }

  $scope.cabin_repress = function() {
    StatusFactory.cabin_repress();
  }

  $scope.restore_power = function() {
    if (($scope.atmo_pressure === "nominal") && ($scope.lifeform === 1)) {
      StatusFactory.restore_power();
    }
  }

  $scope.reboot_eng_comp = function() {
    if ($scope.power === "nominal") {
      StatusFactory.reboot_eng_comp();
    }
  }

  $scope.raise_sails = function() {
    if ($scope.eng_comp_status === "online") {
      StatusFactory.raise_sails();
    }
  }

});
