describe("Poker test", function() {

  var convertService;

  beforeEach(function() {
    module("romanApp");
    inject(function($injector) {
      convertService = $injector.get("convertService");
    });
  });

  it("should return Royal Straight Flush (s)", function(){
    expect(convertService.poker([
      {type:'s',value:'14'},
      {type:'s',value:'11'},
      {type:'s',value:'13'},
      {type:'s',value:'12'},
      {type:'s',value:'10'}]))
    .toEqual("Royal Straight Flush");
  });

  it("should return Royal Straight Flush (d)", function(){
    expect(convertService.poker([
      {type:'d',value:'14'},
      {type:'d',value:'11'},
      {type:'d',value:'13'},
      {type:'d',value:'12'},
      {type:'d',value:'10'}]))
    .toEqual("Royal Straight Flush");
  });

  it("should return Royal Straight Flush (h)", function(){
    expect(convertService.poker([
      {type:'h',value:'14'},
      {type:'h',value:'11'},
      {type:'h',value:'13'},
      {type:'h',value:'12'},
      {type:'h',value:'10'}]))
    .toEqual("Royal Straight Flush");
  });

  it("should return Royal Straight Flush (c)", function(){
    expect(convertService.poker([
      {type:'c',value:'14'},
      {type:'c',value:'11'},
      {type:'c',value:'13'},
      {type:'c',value:'12'},
      {type:'c',value:'10'}]))
    .toEqual("Royal Straight Flush");
  });

  it("should return Straight Flush 1", function(){
    expect(convertService.poker([
      {type:'c',value:'3'},
      {type:'c',value:'4'},
      {type:'c',value:'5'},
      {type:'c',value:'6'},
      {type:'c',value:'7'}]))
    .toEqual("Straight Flush");
  });

  it("should return Straight Flush 2", function(){
    expect(convertService.poker([
      {type:'d',value:'8'},
      {type:'d',value:'9'},
      {type:'d',value:'10'},
      {type:'d',value:'11'},
      {type:'d',value:'12'}]))
    .toEqual("Straight Flush");
  });

  it("should return Four of kind 1", function(){
    expect(convertService.poker([
      {type:'d',value:'9'},
      {type:'h',value:'9'},
      {type:'d',value:'10'},
      {type:'c',value:'9'},
      {type:'d',value:'9'}]))
    .toEqual("Four of kind");
  });

  it("should return Four of kind 2", function(){
    expect(convertService.poker([
      {type:'d',value:'9'},
      {type:'h',value:'10'},
      {type:'d',value:'10'},
      {type:'c',value:'10'},
      {type:'d',value:'10'}]))
    .toEqual("Four of kind");
  });

  it("should return Full House 1", function(){
    expect(convertService.poker([
      {type:'d',value:'9'},
      {type:'h',value:'9'},
      {type:'d',value:'10'},
      {type:'c',value:'10'},
      {type:'d',value:'10'}]))
    .toEqual("Full House");
  });

  it("should return Full House 2", function(){
    expect(convertService.poker([
      {type:'d',value:'14'},
      {type:'h',value:'14'},
      {type:'d',value:'14'},
      {type:'c',value:'10'},
      {type:'d',value:'10'}]))
    .toEqual("Full House");
  });

  it("should return Flush 1", function(){
  expect(convertService.poker([
      {type:'d',value:'11'},
      {type:'d',value:'14'},
      {type:'d',value:'14'},
      {type:'d',value:'10'},
      {type:'d',value:'10'}]))
    .toEqual("Flush");
  });

  it("should return Flush 2", function(){
  expect(convertService.poker([
      {type:'h',value:'11'},
      {type:'h',value:'14'},
      {type:'h',value:'14'},
      {type:'h',value:'10'},
      {type:'h',value:'10'}]))
    .toEqual("Flush");
  });

  it("should return Straight 1", function(){
  expect(convertService.poker([
      {type:'d',value:'14'},
      {type:'h',value:'13'},
      {type:'h',value:'12'},
      {type:'c',value:'11'},
      {type:'h',value:'10'}]))
    .toEqual("Straight");
  });

  it("should return Straight 2", function(){
  expect(convertService.poker([
      {type:'h',value:'6'},
      {type:'h',value:'5'},
      {type:'s',value:'4'},
      {type:'h',value:'3'},
      {type:'h',value:'2'}]))
    .toEqual("Straight");
  });


  



  

});
