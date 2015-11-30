describe("Roman test", function() {

  var convertService;

  beforeEach(function() {
    module("romanApp");
    inject(function($injector) {
      convertService = $injector.get("convertService");
    });
  });

  it("should receive 1 and return I", function(){
    expect(convertService.toRoman(1)).toEqual("I");
  });

  it("should receive 2 and return II", function() {
    expect(convertService.toRoman(2)).toEqual("II");
  });

  it("should receive 3 and return III", function() {
    expect(convertService.toRoman(3)).toEqual("III");
  });

  it("should receive 4 and return IV", function() {
    expect(convertService.toRoman(4)).toEqual("IV");
  });

  it("should receive 5 and return V", function() {
    expect(convertService.toRoman(5)).toEqual("V");
  });

  it("should receive 6 and return VI", function() {
    expect(convertService.toRoman(6)).toEqual("VI");
  });

  it("should receive 9 and return IX", function() {
    expect(convertService.toRoman(9)).toEqual("IX");
  });

  it("should receive 15 and return XV", function() {
    expect(convertService.toRoman(15)).toEqual("XV");
  });

  it("should receive 40 and return XL", function() {
    expect(convertService.toRoman(40)).toEqual("XL");
  });

  it("should receive 50 and return L", function() {
    expect(convertService.toRoman(50)).toEqual("L");
  });

  it("should receive 60 and return LX", function() {
    expect(convertService.toRoman(60)).toEqual("LX");
  });

  it("should receive 90 and return LX", function() {
    expect(convertService.toRoman(90)).toEqual("XC");
  });

  it("should receive 99 and return LX", function() {
    expect(convertService.toRoman(99)).toEqual("XCIX");
  });

  it("should receive 100 and return LX", function() {
    expect(convertService.toRoman(100)).toEqual("C");
  });

  it("should receive 501 and return DI", function() {
    expect(convertService.toRoman(501)).toEqual("DI");
  });

  it("should receive 550 and return DI", function() {
    expect(convertService.toRoman(550)).toEqual("DL");
  });

  it("should receive 530 and return DXXX", function() {
    expect(convertService.toRoman(530)).toEqual("DXXX");
  });

  it("should receive 707 and return DCCVII", function() {
    expect(convertService.toRoman(707)).toEqual("DCCVII");
  });





});
