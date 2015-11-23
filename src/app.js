var roman = angular.module("romanApp", []);

roman.controller("romanController", ["convertService", function(convertService) {
  var ctrl = this;
  ctrl.test = "aaabbb";
  ctrl.input = "";
  ctrl.result = "";

  ctrl.handleChange = function() {
    ctrl.result = convertService.toRoman(ctrl.input);
  };
}]);

roman.factory("convertService", [function() {
  var service = this;
  service.toRoman = function(input) {

    return "I";
  };
  return service;
}]);
