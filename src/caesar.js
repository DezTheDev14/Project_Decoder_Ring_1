// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || (shift === 0 || shift < (-25) || shift > 25)) {
      return false
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const characters = input.toLowerCase().split("")

    if (encode === true) {
      for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          if (characters[i] === alphabet[j]) {
            characters[i] = alphabet[(((j + shift) % alphabet.length) + alphabet.length) % alphabet.length]
            break
          }
        }
      }
      let cipher = characters.join("")
      return cipher
    }
    
    if (encode === false) {
      for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
          if (characters[i] === alphabet[j]) {
            characters[i] = alphabet[(((j - shift) % alphabet.length) + alphabet.length) % alphabet.length]
            break
          }
        }
      }
      let message = characters.join("")
      return message
    }
  }

  return {
    caesar,
  };
})();


module.exports = caesarModule.caesar;