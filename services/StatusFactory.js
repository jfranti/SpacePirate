spacePirates.factory('StatusFactory', function StatusFactory() {
  var factory = {};

  factory.life_support = "undefined";
  factory.sail = "undeployed";
  factory.lifeform = "undefined";
  factory.bulkheads = "open";
  factory.power = "reserve";
  factory.eng_comp_status = "offline";


  factory.update_lifeform_count = function() {
    factory.lifeform = 2;
  };

  factory.seal_bulkheads = function() {
    factory.bulkheads = "sealed";
  }

  factory.open_bulkheads = function() {
    factory.bulkheads = "open";
  }

  factory.kill_intruder = function() {
    factory.lifeform = 1;
    factory.power = "nominal";
  }

  factory.vent_oxygen = function() {
    factory.life_support = "critical";
  }

  factory.reboot_eng_comp = function() {
    factory.eng_comp_status = "online";
  }

  factory.raise_sails = function() {
    factory.sail = "deployed";
  }

  return factory;
});
