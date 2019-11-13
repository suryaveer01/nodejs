//test suite
// describe will call the passed parameter function

var assert  =  require('assert');

var factorial = require('../lib/mathutils.js').factorial;
describe('testing mathUtil.factorial funstion',function () {
    //this is test case
    console.log('test factorial ');

    it('should test factorial of 5 is 120 ', function() {
        console.log('no assertion yet! ');
        assert.equal(1,1);

        expect(1).toEqual(1);

        expect(factorial(5)).toEqual(120);
    });
 });