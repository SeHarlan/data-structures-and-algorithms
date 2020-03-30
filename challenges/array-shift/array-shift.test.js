const { 
  insertShiftArray
} = require('./array-shift.js');

describe('Array shift test', () => {
  describe('array-shift', () => {
    it('returns an array with the value added in the middle', () => {
      expect(insertShiftArray([1,3], 2)).toEqual([1, 2, 3]);
      expect(insertShiftArray([2, 4, 8, 10], 6)).toEqual([2, 4, 6, 8, 10])
    });
  })
});