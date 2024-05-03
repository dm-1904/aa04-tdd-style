const { expect } = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree', function() {

    it('returns the number 3', function() {
        const result = returnsThree()
        expect(result).to.equal(3)
    })
})

describe('reciprocal', function() {
    it('should be the reciprocal of the input', function(){
        expect(reciprocal(2)).to.equal(0.5)
        expect(reciprocal(5)).to.equal(0.2)
        expect(reciprocal(10)).to.equal(0.1)
})
    })
        //const result = reciprocal()
