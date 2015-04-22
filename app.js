var spacePirates = angular.module('spacePirates', ['ui.router']);

spacePirates.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    templateUrl: 'partials/start.html',
    controller: 'TerminalCtrl'
  });

  $stateProvider.state('win', {
    url: 'win',
    templateUrl: 'partials/win.html',
  })

  $stateProvider.state('death', {
    url: 'death',
    templateUrl: 'partials/death.html'
  })

});
