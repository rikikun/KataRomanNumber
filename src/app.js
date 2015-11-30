var roman = angular.module("romanApp", []);

roman.controller("romanController", ["convertService", function(convertService) {
  var ctrl = this;
  ctrl.test = "aaabbb";
  ctrl.input = "";
  ctrl.result = "";

  ctrl.handleChange = function() {
    ctrl.result = convertService.toRoman(ctrl.input.trim());
  };
}]);

roman.factory("convertService", [function() {
  var service = this;
  service.toRoman = function(input) {


    input = Number(input);
    var maps = {
      V:5,
      IV:4,
      I:1
    };
    var result = '';
    var index;
    for ( index in maps ) {
      while ( input >= maps[index] ) {
        result += index;
        input -= maps[index];
      }
    }
    return result;
  };


  return service;
}]);
