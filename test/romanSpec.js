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
});
