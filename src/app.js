var roman = angular.module("romanApp", []);

roman.controller("romanController", ["convertService", function(convertService) {
  var ctrl = this;
  ctrl.test = "aaabbb";
  ctrl.input = "";
  ctrl.result = "";
  ctrl.error = "";
  ctrl.inputToThai = "";
  ctrl.resultToThai = '';

  ctrl.handleChange = function(event) {
    if(!isNaN(ctrl.input)) {
      ctrl.error = "";
      ctrl.result = convertService.toRoman(ctrl.input.trim());
    }else {
      ctrl.error = "Should be only 1-1000";
    }
  };

  ctrl.handleToThaiChange = function(event) {
    ctrl.resultToThai = convertService.toThai(ctrl.inputToThai.trim());
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

  service.toThai = function(numberInput) {
    var result = '';
    if(numberInput === '0') {
      result = 'ศูนย์';
    }else if(numberInput === '1'){
      result = 'หนึ่ง';
    }else {
      var num = {
        '0':'','1':'หนึ่ง','2':'สอง','3':'สาม','4':'สี่','5':'ห้า','6':'หก','7':'เจ็ด','8':'แปด','9':'เก้า','10':'สิบ'
      };
      var num2 = {
        '0':'','1':'','2':'ยี่','3':'สาม','4':'สี่','5':'ห้า','6':'หก','7':'เจ็ด','8':'แปด','9':'เก้า','10': 'สิบ'
      };
      var num3 = {
        '0':'','1':'เอ็ด','2':'สอง','3':'สาม','4':'สี่','5':'ห้า','6':'หก','7':'เจ็ด','8':'แปด','9':'เก้า','10': 'สิบ'
      }; 
      var cost = ['ล้าน','แสน','หมื่น','พัน','ร้อย','สิบ',''];
      var index = cost.length - numberInput.length;
      var i = 0;
      for(var x=0;x<numberInput.length;x++,index++) {
        if(index === 5) {
          result = result + num2[numberInput.charAt(x)] + cost[index] ;
        }else if(index === 6){
          result = result + num3[numberInput.charAt(x)] + cost[index] ;
        }else {
          result = result + num[numberInput.charAt(x)] + cost[index] ;
        }
      }
    }
    return result;
  };




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
