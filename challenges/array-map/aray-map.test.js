const { 
    map
} = require('./array-map.js');

describe('TESTSSSSSSSS', () => {
    describe('array-map', () => {
      it('properly tells if a value is a numbers', () => {
        expect(map([1,2,3], (num) => num * 2)).toEqual([2, 4, 6]);
        expect(map([0,5,8], (num) => num + 1)).toEqual([1, 6, 9]);
        expect(map(["scott","jeb","sally"], (string) => string.toUpperCase())).toEqual(["SCOTT", "JEB", "SALLY"]);
      });
    })
});