var spacePirates = angular.module('spacePirates', ['ui.router']);

spacePirates.config(function($stateProvider) {

  $stateProvider.state('start', {
    url: '',
    views: {
      'terminal': {
        templateUrl: 'partials/start.html'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
  });

  $stateProvider.state('nav_deployed', {
    url: 'win',
    views: {
      'terminal': {
        templateUrl: 'partials/win.html',
        controller: 'StatusCtrl'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
});

$stateProvider.state('raise_sails_online', {
  url: 'win',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/raise_sails_online.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('raise_sails_offline', {
  url: 'raise_sails_offline',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/raise_sails_offline.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});



  $stateProvider.state('death', {
    url: 'death',
    templateUrl: 'partials/death.html'
});

  $stateProvider.state('engines', {
    url: 'engines',
    views: {
      'terminal': {
        templateUrl: 'partials/engine/engines.html',
        controller: 'StatusCtrl'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
});

  $stateProvider.state('raise_sails_false', {
    url: 'raise_sails_false',
    views: {
      'terminal': {
        templateUrl: 'partials/engine/raise_sails_false.html',
        controller: 'StatusCtrl'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
});

  $stateProvider.state('reboot_prop_reserve', {
    url: 'reboot_prop_false',
    views: {
      'terminal': {
        templateUrl: 'partials/engine/reboot_prop_false.html',
        controller: 'StatusCtrl'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
});

$stateProvider.state('reboot_prop_nominal', {
  url: 'reboot_prop_false',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/reboot_prop_true.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

  $stateProvider.state('engage_engines_false', {
    url: 'engage_engines_false',
    views: {
      'terminal': {
        templateUrl: 'partials/engine/engage_engines_false.html',
        controller: 'StatusCtrl'
      },
      'status': {
        templateUrl: 'status.html',
        controller: 'StatusCtrl'
      }
    }
});

$stateProvider.state('nav_undeployed', {
  url: 'nav',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/nav_undeployed.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('nav_undefined', {
  url: 'nav',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/nav_undefined.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});


$stateProvider.state('engine_status_failure', {
  url: 'engine_status_failure',
  views: {
    'terminal': {
      templateUrl: 'partials/engine/engine_status_failure.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('lifesupport', {
  url: 'lifesupport',
  views: {
    'terminal': {
      templateUrl: 'partials/lifesupport/lifesupport.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('cabin_repress', {
  url: 'cabin_repress',
  views: {
    'terminal': {
      templateUrl: 'partials/lifesupport/cabin_repress.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('recycle', {
  url: 'recycle',
  views: {
    'terminal': {
      templateUrl: 'partials/lifesupport/recycle.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});


$stateProvider.state('more_air', {
  url: 'more_air',
  views: {
    'terminal': {
      templateUrl: 'partials/lifesupport/more_air.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }

});

$stateProvider.state('security', {
  url: 'security',
  views: {
    'terminal': {
      templateUrl: 'partials/security/security.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('lifeform_scan', {
  url: 'lifeform_scan',
  views: {
    'terminal': {
      templateUrl: 'partials/security/lifeform_scan.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('identify_lifeforms_undefined', {
  url: 'identify_lifeforms',
  views: {
    'terminal': {
      templateUrl: 'partials/security/identify_lifeforms_undefined.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('identify_lifeforms_1', {
  url: 'identify_lifeforms',
  views: {
    'terminal': {
      templateUrl: 'partials/security/identify_lifeforms_1.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('identify_lifeforms_2', {
  url: 'identify_lifeforms',
  views: {
    'terminal': {
      templateUrl: 'partials/security/identify_lifeforms.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('crew_status_undefined', {
  url: 'crew_status',
  views: {
    'terminal': {
      templateUrl: 'partials/security/crew_status.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});


$stateProvider.state('crew_status_2', {
  url: 'crew_status',
  views: {
    'terminal': {
      templateUrl: 'partials/security/crew_status.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('crew_status_1', {
  url: 'crew_status',
  views: {
    'terminal': {
      templateUrl: 'partials/security/crew_status_1.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('seal_bulkheads', {
  url: 'seal_bulkheads',
  views: {
    'terminal': {
      templateUrl: 'partials/security/seal_bulkheads.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('open_bulkheads', {
  url: 'open_bulkheads',
  views: {
    'terminal': {
      templateUrl: 'partials/security/open_bulkheads.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('sealed', {
  url: 'sealed',
  views: {
    'terminal': {
      templateUrl: 'partials/lifesupport/vent.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});

$stateProvider.state('open', {
  url: 'open',
  views: {
    'terminal': {
      templateUrl: 'partials/ventdeath.html',
      controller: 'StatusCtrl'
    },
    'status': {
      templateUrl: 'status.html',
      controller: 'StatusCtrl'
    }
  }
});




});
