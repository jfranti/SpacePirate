spacePirates.factory('StatusFactory', function StatusFactory() {
  var factory = {};

  factory.life_support = "_undefined";
  factory.sail = "_undefined";
  factory.lifeform = "_undefined";

  factory.update_lifeform = function() {
    factory.lifeform = 4;
  };

  return factory;
});
