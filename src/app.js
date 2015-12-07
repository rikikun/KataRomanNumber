var roman = angular.module("romanApp", []);

roman.controller("romanController", ["convertService", function(convertService) {
  var ctrl = this;
  ctrl.test = "aaabbb";
  ctrl.input = "";
  ctrl.result = "";
  ctrl.error = "";
  ctrl.inputToThai = "";

  ctrl.handleChange = function(event) {
    if(!isNaN(ctrl.input)) {
      ctrl.error = "";
      ctrl.result = convertService.toRoman(ctrl.input.trim());
    }else {
      ctrl.error = "Should be only 1-1000";
    }
  };

  ctrl.handleKeypress = function(event) {
    if(isNaN(String.fromCharCode(event.charCode))) {
      ctrl.error = "Should be only 1-1000";
      event.preventDefault();
    }else {
      ctrl.error = "";
    }
  };

}]);

roman.factory("convertService", [function() {
  var service = this;
  service.toRoman = function(input) {
    input = Number(input);
    var maps = {
      M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
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
