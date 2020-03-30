const { multiBracketValidation } =require('./multi-bracket-validation.js')

describe('multibracket validation test', () => {
  describe('returns true for (), [], and {}', () => {
    it('returns true {}', () => {
      expect(multiBracketValidation('{}')).toEqual(true)
    })
    it('returns true {}(){}', () => {
      expect(multiBracketValidation('{}(){}')).toEqual(true)
    })
    it('returns true {}[[xxx]]', () => {
      expect(multiBracketValidation('()[[extraaaa]]')).toEqual(true)
    })
    it('returns true (){}[[]]', () => {
      expect(multiBracketValidation('(){}[[]]')).toEqual(true)
    })
    it('returns true {}{code}[felow](())', () => {
      expect(multiBracketValidation('{}{code}[fellows](())')).toEqual(true)
    })
    
  })
  describe('returns false for incomplete pairs', () => {
    it('returns false [({}]', () => {
      expect(multiBracketValidation('[({}]')).toEqual(false)
    })
    it('returns false (](', () => {
      expect(multiBracketValidation('(](')).toEqual(false)
    })
    // it('returns false {(})', () => {
    //   expect(multiBracketValidation('{(})')).toEqual(false)
    // })
  })
})