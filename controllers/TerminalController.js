spacePirates.controller('TerminalCtrl', function TerminalCtrl($scope) {
  $scope.run = function() {
    if(user_input == 0) {
      //send to win screen
    }
    else if(user_input == 1) {
      //send to death screen
    }
    else {
      //invalid input
    }
  };
});
