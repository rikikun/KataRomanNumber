describe('numberToThai', function() {
	var convertService;

	beforeEach(function() {
	module("romanApp");
		inject(function($injector) {
		  convertService = $injector.get("convertService");
		});
	});

	it('should convert 0 to ศูนย์', function() {
		expect('ศูนย์').toEqual(convertService.toThai('0'));
	});

	it('should convert 1 to หนึ่ง', function() {
		expect('หนึ่ง').toEqual(convertService.toThai('1'));
	});

	it('should convert 2 to สอง', function() {
		expect('สอง').toEqual(convertService.toThai('2'));
	});

	it('should convert 3 to สาม', function() {
		expect('สาม').toEqual(convertService.toThai('3'));
	});

	it('should convert 4 to สี่', function() {
		expect('สี่').toEqual(convertService.toThai('4'));
	});

	it('should convert 5 to ห้า', function() {
		expect('ห้า').toEqual(convertService.toThai('5'));
	});

	it('should convert 12 to สิบสอง', function() {
		expect('สิบสอง').toEqual(convertService.toThai('12'));
	});

	it('should convert 20 to ยี่สิบ', function() {
		expect('ยี่สิบ').toEqual(convertService.toThai('20'));
	});

	it('should convert 9921 to เก้าพันเก้าร้อยยี่สิบเอ็ด', function() {
		expect('เก้าพันเก้าร้อยยี่สิบเอ็ด').toEqual(convertService.toThai('9921'));
	});
});