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
});

  $stateProvider.state('death', {
    url: 'death',
    templateUrl: 'partials/death.html'
});

  $stateProvider.state('engines', {
    url: 'engines',
    templateUrl: 'partials/engine/engines.html'
});

  $stateProvider.state('raise_sails_false', {
    url: 'raise_sails_false',
    templateUrl: 'partials/engine/raise_sails_false.html'
});

  $stateProvider.state('reboot_prop_false', {
    url: 'reboot_prop_false',
    templateUrl: 'partials/engine/reboot_prop_false.html'
});

  $stateProvider.state('engage_engines_false', {
    url: 'engage_engines_false',
    templateUrl: 'partials/engine/engage_engines_false.html'
});

  $stateProvider.state('nav', {
    url: 'nav',
    templateUrl: 'partials/engine/nav.html'
});

$stateProvider.state('engine_status_failure', {
  url: 'engine_status_failure',
  templateUrl: 'partials/engine/engine_status_failure.html'
});

$stateProvider.state('lifesupport', {
  url: 'lifesupport',
  templateUrl: 'partials/lifesupport/lifesupport.html'
});

$stateProvider.state('cabin_repress', {
  url: 'cabin_repress',
  templateUrl: 'partials/lifesupport/cabin_repress.html'
});

$stateProvider.state('more_air', {
  url: 'more_air',
  templateUrl: 'partials/lifesupport/more_air.html'
});

$stateProvider.state('security', {
  url: 'security',
  templateUrl: 'partials/security/security.html'
});

$stateProvider.state('lifeform_scan', {
  url: 'lifeform_scan',
  templateUrl: 'partials/security/lifeform_scan.html'
});





});
