const { assert } = require('chai');
const arrayDominator = require('./challenge3');

describe('Test dominator', () => {

    it('should choose 3 as dominator when the last index makes 3 the dominator', () => {
        assert.equal(arrayDominator([3,4,3,2,3,-1, 3, 3]), 7)
    })
    it('should choose 4 as dominator just after the middle of the array', () => {
        assert.equal(arrayDominator([4,4,4,4,3,-1]), 3)
    })
    it('should return -1 for array without dominator', () => {
        assert.equal(arrayDominator([4,3,4,4,3,-1]), -1)
    })
})
