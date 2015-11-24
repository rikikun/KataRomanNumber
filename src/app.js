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
    var maps = [10, 5, 1];
    var value = ["X", "V", "I"];
    var result = "";
    var index = 0;
    while(input > 0) {
      if(input === (maps[index] - 1) ) {
        input = 0;
        result += "I" + value[index];
        break;
      }else if(input >= maps[index]) {
        result = value[index];
        input = input - maps[index];
      }else if(input <= 3){
        result += value[value.length - 1];
        input = input - 1;
      }else {
        index++;
      }
    }

    return result;
  };
  return service;
}]);
