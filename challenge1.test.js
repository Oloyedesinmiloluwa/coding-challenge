const { assert } = require('chai');
const triange = require('./challenge1');

describe('Test triangular triplet', () => {

    it('should return 1 [10, 2, 5, 1, 8, 20]', () => {
        assert.equal(triange([10, 2, 5, 1, 8, 20]), 1) 
    })
    it('should return 1 [1,2,4, 2]', () => {
        assert.equal(triange([1,2,4, 2]), 1) 
    })
    it('should return 0 for [10, 50, 5, 1]', () => {
        assert.equal(triange([10, 50, 5, 1]), 0) 
    })
    it('should return 0 for [1, 50, 5]', () => {
        assert.equal(triange([1, 50, 5]), 0) 
    })
    it('should return 0 for array of 2 elements', () => {
        assert.equal(triange([1, 50]), 0) 
    })
    it('should return 0 for array of 1 element', () => {
        assert.equal(triange([1]), 0) 
    })
    it.only('should return 1 for [1, 2, 3, 4, 55, 6, 7, 8, 9, 34, 44, 555, 6, 1, 12]', () => {
        assert.equal(triange([1, 2, 3, 4, 55, 6, 7, 8, 9, 34, 44, 555, 6, 1, 12]), 1) 
    })
   
})
