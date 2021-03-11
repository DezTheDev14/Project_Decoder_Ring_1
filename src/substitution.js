// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false
    }

    const substitutionAlphabet = alphabet.toLowerCase().split("")

    if (substitutionAlphabet.length < 26 || substitutionAlphabet.length > 26) {
      return false
    }
    
    for (let i = 0; i < substitutionAlphabet.length; i++) {
      for (let j = i + 1; j < substitutionAlphabet.length; j++) {
        if (substitutionAlphabet[i] === substitutionAlphabet[j]) {
          return false
        }
      }
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const characters = input.toLowerCase().split("")

    if (encode === true) {
      for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < standardAlphabet.length; j++) {
          if (characters[i] === standardAlphabet[j]) {
            characters[i] = substitutionAlphabet[j]
            break
          }
        }
      }
      let cipher = characters.join("")
      return cipher
    }
    
    if (encode === false) {
      for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < substitutionAlphabet.length; j++) {
          if (characters[i] === substitutionAlphabet[j]) {
            characters[i] = standardAlphabet[j]
            break
          }
        }
      }
      let message = characters.join("")
      return message
    }
  }

  return {
    substitution,
  };
})();


module.exports = substitutionModule.substitution;