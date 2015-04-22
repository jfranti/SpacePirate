var spacePirates = angular.module('spacePirates', ['ui.router']);

spacePirates.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    templateUrl: 'partials/start.html'
  });

});
