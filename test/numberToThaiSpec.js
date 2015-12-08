describe('numberToThai', function() {
	var convertService;

	beforeEach(function() {
	module("romanApp");
		inject(function($injector) {
		  convertService = $injector.get("convertService");
		});
	});

	it('should convert 0 to ศูนย์', function() {
		expect('ศูนย์บาท').toEqual(convertService.toThai('0'));
	});

	it('should convert 1.25 to หนึ่งบาทยี่สิบห้าสตางค์', function() {
		expect('หนึ่งบาทยี่สิบห้าสตางค์').toEqual(convertService.toThai('1.25'));
	});

	it('should convert 1 to หนึ่ง', function() {
		expect('หนึ่งบาท').toEqual(convertService.toThai('1'));
	});

	it('should convert 2 to สอง', function() {
		expect('สองบาท').toEqual(convertService.toThai('2'));
	});

	it('should convert 3 to สาม', function() {
		expect('สามบาท').toEqual(convertService.toThai('3'));
	});

	it('should convert 4 to สี่', function() {
		expect('สี่บาท').toEqual(convertService.toThai('4'));
	});

	it('should convert 5 to ห้า', function() {
		expect('ห้าบาท').toEqual(convertService.toThai('5'));
	});

	it('should convert 12 to สิบสอง', function() {
		expect('สิบสองบาท').toEqual(convertService.toThai('12'));
	});

	it('should convert 20 to ยี่สิบ', function() {
		expect('ยี่สิบบาท').toEqual(convertService.toThai('20'));
	});

	it('should convert 9000 to เก้าพัน', function() {
		expect('เก้าพันบาท').toEqual(convertService.toThai('9000'));
	});

	it('should convert 9921 to เก้าพันเก้าร้อยยี่สิบเอ็ด', function() {
		expect('เก้าพันเก้าร้อยยี่สิบเอ็ดบาท').toEqual(convertService.toThai('9921'));
	});

	it('should convert 9,999,921 to เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยยี่สิบเอ็ด', function() {
		expect('เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยยี่สิบเอ็ดบาท').toEqual(convertService.toThai('9999921'));
	});

	it('should convert 109,999,921 to หนึ่งร้อยเก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยยี่สิบเอ็ด', function() {
		expect('หนึ่งร้อยเก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยยี่สิบเอ็ดบาท').toEqual(convertService.toThai('109999921'));
	});

	it('should convert 2,000,000,000,000 to สองล้านล้านบาท', function() {
		expect('สองล้านล้านบาท').toEqual(convertService.toThai('2000000000000'));
	});
});