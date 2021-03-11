// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encoder = [
    {
      letter: "a",
      number: "11"
    },
    {
      letter: "b",
      number: "21"
    },
    {
      letter: "c",
      number: "31"
    },
    {
      letter: "d",
      number: "41"
    },
    {
      letter: "e",
      number: "51"
    },
    {
      letter: "f",
      number: "12"
    },
    {
      letter: "g",
      number: "22"
    },
    {
      letter: "h",
      number: "32"
    },
    {
      letter: "i",
      number: "42"
    },
    {
      letter: "j",
      number: "42"
    },
    {
      letter: "k",
      number: "52"
    },
    {
      letter: "l",
      number: "13"
    },
    {
      letter: "m",
      number: "23"
    },
    {
      letter: "n",
      number: "33"
    },
    {
      letter: "o",
      number: "43"
    },
    {
      letter: "p",
      number: "53"
    },
    {
      letter: "q",
      number: "14"
    },
    {
      letter: "r",
      number: "24"
    },
    {
      letter: "s",
      number: "34"
    },
    {
      letter: "t",
      number: "44"
    },
    {
      letter: "u",
      number: "54"
    },
    {
      letter: "v",
      number: "15"
    },
    {
      letter: "w",
      number: "25"
    },
    {
      letter: "x",
      number: "35"
    },
    {
      letter: "y",
      number: "45"
    },
    {
      letter: "z",
      number: "55"
    }
  ]


  const decoder = [
    {
      letter: "a",
      number: "11"
    },
    {
      letter: "b",
      number: "21"
    },
    {
      letter: "c",
      number: "31"
    },
    {
      letter: "d",
      number: "41"
    },
    {
      letter: "e",
      number: "51"
    },
    {
      letter: "f",
      number: "12"
    },
    {
      letter: "g",
      number: "22"
    },
    {
      letter: "h",
      number: "32"
    },
    {
      letter: "(i/j)",
      number: "42"
    },
    {
      letter: "k",
      number: "52"
    },
    {
      letter: "l",
      number: "13"
    },
    {
      letter: "m",
      number: "23"
    },
    {
      letter: "n",
      number: "33"
    },
    {
      letter: "o",
      number: "43"
    },
    {
      letter: "p",
      number: "53"
    },
    {
      letter: "q",
      number: "14"
    },
    {
      letter: "r",
      number: "24"
    },
    {
      letter: "s",
      number: "34"
    },
    {
      letter: "t",
      number: "44"
    },
    {
      letter: "u",
      number: "54"
    },
    {
      letter: "v",
      number: "15"
    },
    {
      letter: "w",
      number: "25"
    },
    {
      letter: "x",
      number: "35"
    },
    {
      letter: "y",
      number: "45"
    },
    {
      letter: "z",
      number: "55"
    }
  ]

  function polybius(input, encode = true) {
    const lowerCaseInput = input.toLowerCase()
    if (encode === true) {
      let characters = lowerCaseInput.split("")
      for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < encoder.length; j++) {
          if (characters[i] === encoder[j].letter) {
            characters[i] = encoder[j].number
            break
          }
        }
      }
      let cipher = characters.join("")
      return cipher
    } else if (encode === false) {
      if (lowerCaseInput.includes(" ")) {
        let inputSplit = lowerCaseInput.split(" ")
        let inputJoined = inputSplit.join("")
        if ((inputJoined.length % 2) > 0) {
          return false
        } else {
          let decoded = []
          for (let i = 0; i < inputSplit.length; i++) {
            let characterGroup = inputSplit[i]
            for (let j = 0; j < characterGroup.length; j+=2) {
              let characterPair = (characterGroup[j] + characterGroup[j + 1])
              for (let k = 0; k < decoder.length; k++) {
                if (characterPair === decoder[k].number && (characterGroup.length - 2) === j) {
                  decoded.push(decoder[k].letter)
                  decoded.push(" ")
                  break
                } else if (characterPair === decoder[k].number) {
                  decoded.push(decoder[k].letter)
                  break
                }
              }
            }
          }
          let message = decoded.join("")
          return message.trim()
        }
      } else {
        if ((lowerCaseInput.length % 2) > 0) {
          return false
        } else {
          let decoded = []
          let characters = lowerCaseInput.split("")
          for (let i = 0; i < characters.length; i+=2) {
            let characterPair = (characters[i] + characters[i + 1])
            for (let j = 0; j < decoder.length; j++) {
              if (characterPair === decoder[j].number) {
                decoded.push(decoder[j].letter)
                break
              }
            }
          }
          let message = decoded.join("")
          return message
        }
      }
    }
  }

  return {
    polybius,
  };
})();


module.exports = polybiusModule.polybius;