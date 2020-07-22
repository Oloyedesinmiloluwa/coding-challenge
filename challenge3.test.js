const { assert } = require('chai');
const properlyNested = require('./challenge2');

describe('Test nested string', () => {
    
    it('should fail (', () => {
        assert.equal(properlyNested('('), 0)
        
    })
    it('should fail ([)()]', () => {
        assert.equal(properlyNested('([)()]'), 0)
        
    })
    it('should fail long string early', () => {
        assert.equal(properlyNested('([)()]'.repeat(100)), 0)
    })
    it('pass ()', () => {
        assert.equal(properlyNested('()'), 1)
        
    })
    it('pass []()', () => {
        assert.equal(properlyNested('[]()'), 1)
        
    })
    it('pass [()]', () => {
        assert.equal(properlyNested('[()]'), 1)
        
    })
    it('pass [()()]', () => {
        assert.equal(properlyNested('[()()]'), 1)
        
    })
    it('pass {[()()]} ', () => {
        assert.equal(properlyNested("{[()()]}" ), 1)
        
    })
    it('pass {[()[]]} ', () => {
        assert.equal(properlyNested("{[()[]]}" ), 1)
        
    })
    
})
