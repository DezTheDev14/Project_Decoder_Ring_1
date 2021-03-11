const expect = require("chai").expect
const substitutionModule = require("../src/substitution")


describe("substitutionModule", () => {
  describe("general", () => {
    it("should return false if no substitution alphabet is provided", () => {
      const actual = substitutionModule("thinkful")
      expect(actual).to.be.false
    })
    it("should return false if the provided substitution alphabet is less than 26 characters in length", () => {
      const actual = substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibe")
      expect(actual).to.be.false
    })
    it("should return false if the provided substitution alphabet is greater than 26 characters in length", () => {
      const actual = substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev$")
      expect(actual).to.be.false
    })
    it("should return false if the provided substitution alphabet contains any duplicate or repeating characters", () => {
      const actual = substitutionModule("thinkful", "abcabcabcabcabcabcabcabcyz")
      expect(actual).to.be.false
    })
  })
  
  describe("encoding", () => {
    it("should return a properly encoded message, regardless of the unique characters contained within the provided substitution alphabet", () => {
      const expected = "y&ii$r&"
      const actual = substitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl")
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message that maintains spaces as originally provided", () => {
      const expected = "elp xhm xf mbymwwmfj dne"
      const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message, regardless of the character-case of the provided input string", () => {
      const expected = "jrufscpw"
      const actual = substitutionModule("ThINkfUl", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.eql(expected)
    })
  })

  describe("decoding", () => {
    it("should return a properly decoded message, regardless of the unique characters contained within the provided substitution alphabet", () => {
      const expected = "message"
      const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message that maintains spaces as originally provided", () => {
      const expected = "you are an excellent spy"
      const actual = substitutionModule("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message, regardless of the character-case of the provided input string", () => {
      const expected = "thinkful"
      const actual = substitutionModule("JrUFscPw", "xoyqmcgrukswaflnthdjpzibev", false)
      expect(actual).to.eql(expected)
    })
  })
})