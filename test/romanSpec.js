describe("Roman test", function() {

  var convertService;

  beforeEach(function() {
    module("romanApp");
    inject(function($injector) {
      convertService = $injector.get("convertService");
    });
  });

  it("shoud define to roman function ", function() {
    expect(convertService.toRoman).toBeDefined();
  });

  it("should receive 1 and return I", function(){
    expect(convertService.toRoman(1)).toEqual("I");
  });

  it("should receive 2 and return II", function() {
    expect(convertService.toRoman(2)).toEqual("II");
  })
});
