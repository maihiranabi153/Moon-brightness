let expect = require('mocha').expect;
let parkingLot = require('../parkingLot');
describe('Leave 4', async function() {
it('should free slot no 4', async function() {
var preResult = 'slot number 4 is free with charge 30';
var result = await parkingLot.leave(4);
console.log(result);
expect(result).to.be.equal(preresult);
});
});