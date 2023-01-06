const max = require('../js/max').max;
const expect = require('chai').expect;

describe('Given two numbers, find the larger of these two numbers', function () {
    it('should return 10 when given 10 and 2', function() {
        let result = max(10, 2);
        expect(result).to.equal(10);
    });

    it('should return the positive number when given a positive and negative number', function() {
        let result = max(3, -6);
        expect(result).to.equal(3);
    });
});