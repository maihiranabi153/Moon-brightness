let expect = require('Mocha').expect;
let parkingLot = require('../parkingLot');


describe('registration_numbers_for_cars_with_colour White', async function () {
  it('should show registration numbers of white cars', async function () {
    var result = await parkingLot.getRegistrationNumbersFromColor('White');
    var preResult = 'KA-09-HH-0987,KA-01-HH-9999,CA-09-IO-1111, KA-01-HH-7777,KA-01-HH-2701,KA-01-P-333'
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});