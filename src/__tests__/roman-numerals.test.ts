import convertToRomanNumerals from "../roman-numerals";

describe("Roman Numerals", () => {
  it(`it should return "I", when receive "1"`, () => {
    // Arrange
    const expectedResult = "I";

    // Act
    const actualResult: string = convertToRomanNumerals(1);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "III", when receive "3"`, () => {
    // Arrange
    const expectedResult = "III";

    // Act
    const actualResult: string = convertToRomanNumerals(3);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
