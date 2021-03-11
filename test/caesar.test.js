const expect = require("chai").expect
const caesarModule = require("../src/caesar")


describe("caesarModule.caesar", () => {
  describe("general", () => {
    it("should return false if no shift parameter is provided", () => {
      const actual = caesarModule("thinkful")
      expect(actual).to.be.false
    })
    it("should return false if the provided shift parameter is greater than 25", () => {
      const actual = caesarModule("thinkful", 26)
      expect(actual).to.be.false
    })
    it("should return false if the provided shift parameter is less than -25", () => {
      const actual = caesarModule("thinkful", -26)
      expect(actual).to.be.false
    })
    it("should return false if the provided shift parameter is 0", () => {
      const actual = caesarModule("thinkful", 0)
      expect(actual).to.be.false
    })
  })
  
  describe("encoding", () => {
    it("should return a properly encoded message utilizing a positive shift", () => {
      const expected = "wklqnixo"
      const actual = caesarModule("thinkful", 3)
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message utilizing a negative shift", () => {
      const expected = "qefkhcri"
      const actual = caesarModule("thinkful", -3)
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message that maintains spaces and symbols as originally provided", () => {
      const expected = "bpqa qa i amkzmb umaaiom!"
      const actual = caesarModule("this is a secret message!", 8)
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message, regardless of the character-case of the provided input string", () => {
      const expected = "wklqnixo"
      const actual = caesarModule("THINKFUL", 3)
      expect(actual).to.eql(expected)
    })
  })

  describe("decoding", () => {
    it("should return a properly decoded message utilizing a positive shift", () => {
      const expected = "znotqlar"
      const actual = caesarModule("wklqnixo", -3, false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message utilizing a negative shift", () => {
      const expected = "thinkful"
      const actual = caesarModule("wklqnixo", 3, false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message that maintains spaces and symbols as originally provided", () => {
      const expected = "this is a secret message!"
      const actual = caesarModule("bpqa qa i amkzmb umaaiom!", 8, false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message, regardless of the character-case of the provided input string", () => {
      const expected = "thinkful"
      const actual = caesarModule("WKLQNIXO", 3, false)
      expect(actual).to.eql(expected)
    })
  })
})