const { 
  binarySearch
} = require('./array-binary-search.js');

describe('Array binary test', () => {
  describe('binary search', () => {
    it('returns an array with the value added in the middle', () => {
      expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
      expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1)
    });
  })
});