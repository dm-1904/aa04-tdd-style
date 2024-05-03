const { expect } = require('chai')
const revStr = require('../problems/reverse-string')
const reverseString = require('../problems/reverse-string')

describe('reverseString()', function() {
    it("should print the reverse string of 'fun'", function() {
        const input = 'fun'
    const expectedOutput = 'nuf'
    const result = reverseString(input)
        expect(result).to.eql(expectedOutput)
    })
    // expect(input).to.be.a('string')
    it('should throw a TypeError if the input is not a string', function(){
        // const inputType = reverseString(123)
        // expect(inputType).to.throw(TypeError)
        // expect(inputType).to.throw(TypeError)
        //expect(() => reverseString(1)).to.throw(TypeError);
        const input = 123;

        const testFunc = () => reverseString(input);

        expect(testFunc).to.throw(TypeError);
    })


})
