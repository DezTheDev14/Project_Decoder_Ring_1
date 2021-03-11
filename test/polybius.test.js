const expect = require("chai").expect
const polybiusModule = require("../src/polybius")


describe("polybiusModule", () => {
  describe("encoding", () => {
    it("should return a properly encoded message as a string of coordinate pairs", () => {
      const expected = "4432423352125413"
      const actual = polybiusModule("thinkful")
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message, regardless of the character-case of the provided input string", () => {
      const expected = "3251131343"
      const actual = polybiusModule("HELLO")
      expect(actual).to.eql(expected)
    })
    it("should return a properly encoded message that maintains spaces as originally provided", () => {
      const expected = "3251131343 2543241341"
      const actual = polybiusModule("hello world")
      expect(actual).to.eql(expected)
    })
    it("should return coordinate '42' when encoding the character 'i'", () => {
      const expected = "42"
      const actual = polybiusModule("i")
      expect(actual).to.eql(expected)
    })
    it("should return coordinate '42' when encoding the character 'j'", () => {
      const expected = "42"
      const actual = polybiusModule("j")
      expect(actual).to.eql(expected)
    })
  })

  describe("decoding", () => {
    it("should return false if the number of characters in the provided input string, excluding spaces, is an odd number", () => {
      const actual = polybiusModule("44324233521254134", false)
      expect(actual).to.be.false
    })
    it("should return a properly decoded message as a string of characters", () => {
      const expected = "hello"
      const actual = polybiusModule("3251131343", false)
      expect(actual).to.eql(expected)
    })
    it("should return a properly decoded message that maintains spaces as originally provided", () => {
      const expected = "hello world"
      const actual = polybiusModule("3251131343 2543241341", false)
      expect(actual).to.eql(expected)
    })
    it("should return i and j as a combined character when decoding coordinate '42'", () => {
      const expected = "th(i/j)nkful"
      const actual = polybiusModule("4432423352125413", false)
      expect(actual).to.eql(expected)
    })
  })
})