const { multiBracketValidation } =require('./multi-bracket-validation')

describe('multibracket validation test', () => {
  it('returns true for (), [], and {}', () => {
    expect(multiBracketValidation('{}').toEqual(true)
    )
    expect(multiBracketValidation('{}(){}').toEqual(true)
    )
    expect(multiBracketValidation('()[[extraaaa]]').toEqual(true)
    )
    expect(multiBracketValidation('(){}[[]]').toEqual(true)
    )
    expect(multiBracketValidation('{}{code}[fellows](())').toEqual(true)
    )
  })
  it('returns false for incomplete pairs', () => {
    expect(multiBracketValidation('[({}]').toEqual(false))
    expect(multiBracketValidation('(](').toEqual(false))
    expect(multiBracketValidation('{(})').toEqual(false))
  })
})