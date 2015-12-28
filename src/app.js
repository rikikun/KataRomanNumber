var roman = angular.module("romanApp", []);

roman.controller("romanController", ["convertService", function(convertService) {
  var ctrl = this;
  ctrl.test = "aaabbb";
  ctrl.input = "";
  ctrl.result = "";
  ctrl.error = "";
  ctrl.inputToThai = "";
  ctrl.resultToThai = '';
  ctrl.inputToPoker = '';
  ctrl.resultToPoker = '';

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

  ctrl.handlePokerChange = function(event) {
    var newObject = ctrl.convertToFormat(ctrl.inputToPoker);
    if(newObject.length != 5) {
      ctrl.resultToPoker = 'Input Wrong format should be h-5;d-6;c-J;s-A;d-K';
    }else {
      ctrl.resultToPoker = '';
      ctrl.resultToPoker = convertService.poker(newObject);
    }
  };

  ctrl.convertToFormat = function(input) {
    return input.trim().split(';').map(function(inp) {
      var value = '';
      switch(inp.split('-')[1]){
          case 'J' || 'j':
            value = '11';
            break;
          case 'Q' || 'q':
            value = '12';
            break;
          case 'K' || 'k':
            value = '13';
            break;
          case 'A' || 'a':
            value = '14';
            break;
          default:
            value = inp.split('-')[1];
            break;
        };
      return {
        type: inp.split('-')[0],
        value: value,
      };
    });
  }

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

  service.poker = function(cards) {
    var royalStraightFlush = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      });
      values = values.sort(function(a,b) {
        return a-b;
      });
      return flush(cards) && (values.toString() === ['10','11','12','13','14'].toString()) ? true : false;
    };

    var fourOfKind = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      });
      values = values.filter(function(item, index) {
        return values.indexOf(item) == index;
      });
      return values.length === 2;
    };

    var fullHouse = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      });
      var uniqueValues = values.filter(function(item, index) {
        return values.indexOf(item) === index;
      });
      switch(uniqueValues.length) {
        case 2:
          var number = values.filter(function(item) {
            return item === uniqueValues[0];
          }).length;
          return (number === 3 || number === 2);
        default:
          return false;
      }
    }

    var flush = function(inCards) {
      var types = inCards.map(function(card) {
        return card.type;
      });
      types = types.filter(function(item, index) {
        return types.indexOf(item) === index;
      });
      return types.length === 1;
    }

    var straight = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      });
      values = values.sort(function(a,b) {
        return a-b;
      });
      values = values.reduce(function(previous, current) {
        return previous === (current-1).toString() ? current: false;
      });
      return values ? true : false;
    }

    var threeOfKind = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      });
      var uniqueValues = values.filter(function(value, index) {
        return values.indexOf(value) === index;
      });
      switch(uniqueValues.length) {
        case 3:
          var check1 = values.filter(function(item) {
            return item === uniqueValues[0];
          }).length;
          var check2 = values.filter(function(item) {
            return item === uniqueValues[1];
          }).length;
          var check3 = values.filter(function(item) {
            return item === uniqueValues[2];
          }).length;
          return (check1 === 3 || check2 === 3 || check3 === 3);
        default:
          return false;
      }
    }

    var twoPair = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      })
      return values.filter(function(value, index) {
        return values.indexOf(value) === index;
      }).length === 3;
    }

    var onePair = function(inCards) {
      var values = inCards.map(function(card) {
        return card.value;
      })
      return values.filter(function(value, index) {
        return values.indexOf(value) === index;
      }).length === 4;
    }

    switch(true) {
        case royalStraightFlush(cards):
          return 'Royal Straight Flush';
        case flush(cards) && straight(cards):
          return 'Straight Flush';
        case fullHouse(cards):
          return 'Full House';
        case fourOfKind(cards):
          return 'Four of kind';
        case flush(cards):
          return 'Flush';
        case straight(cards):
          return 'Straight';
        case threeOfKind(cards):
          return 'Three of a kind';
        case twoPair(cards):
          return 'Two pair';
        case onePair(cards):
          return 'One pair';
        default:
          return 'High card';
      }
  };

  service.toThai = function(numIn) {
    
    function con(numberInput) {
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
        var cost = ['แสน','หมื่น','พัน','ร้อย','สิบ',''];
        var index = cost.length - numberInput.length;
        var i = 0;
        for(var x=0;x<numberInput.length;x++,index++) {
          if(numberInput.charAt(x) === '0'){
            continue;
          }
          if(index === 4) {
            result = result + num2[numberInput.charAt(x)] + cost[index] ;
          }else if(index === 5){
            result = result + num3[numberInput.charAt(x)] + cost[index] ;
          }else {
            result = result + num[numberInput.charAt(x)] + cost[index] ;
          }
        }
      }
      return result;
    }
    var satang = numIn.split('.').length > 1 ? con(numIn.split('.')[1]) + 'สตางค์' : '';
    var other = numIn.split('.')[0];
    var result = '';
    var round = Math.ceil(other.length/6);
    for(var r=0;r<round;r++) {
      var  s;
      if((other.length-(6*(r+1))) < 0) {
        s = other.substr(0,other.length-(6*r));
      }else {
        s = other.substr(other.length-(6*(r+1)),other.length-(6*r));
      }
      if(r>0){
        result =  con(s) + 'ล้าน' + result;
      }else {
        result =  con(s) + result;
      }
    }

    return result + 'บาท' + satang ;
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
