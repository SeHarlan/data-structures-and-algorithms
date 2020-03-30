function multiBracketValidation(input) {
  arr = input.split('')

 
  let stack = []

  const openingBrackets = ['[', '{', '(']
  const closingBrackets = [']', '}', ')']

  arr.forEach(character => {
    
    if(closingBrackets.indexOf(character) > -1) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(character)]

      if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) return 
    } else {
      if (!openingBrackets.includes(character) && !closingBrackets.includes(character)) return
      stack.push(character)
    }
  });
  return (stack.length === 0)
}

module.exports = {
  multiBracketValidation
}

