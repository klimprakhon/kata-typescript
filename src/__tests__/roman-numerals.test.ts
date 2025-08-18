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

  it(`it should return "IV", when receive "4"`, () => {
    // Arrange
    const expectedResult = "IV";

    // Act
    const actualResult: string = convertToRomanNumerals(4);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "V", when receive "5"`, () => {
    // Arrange
    const expectedResult = "V";

    // Act
    const actualResult: string = convertToRomanNumerals(5);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "VIII", when receive "8"`, () => {
    // Arrange
    const expectedResult = "VIII";

    // Act
    const actualResult: string = convertToRomanNumerals(8);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "IX", when receive "9"`, () => {
    // Arrange
    const expectedResult = "IX";

    // Act
    const actualResult: string = convertToRomanNumerals(9);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "X", when receive "10"`, () => {
    // Arrange
    const expectedResult = "X";

    // Act
    const actualResult: string = convertToRomanNumerals(10);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "XIII", when receive "13"`, () => {
    // Arrange
    const expectedResult = "XIII";

    // Act
    const actualResult: string = convertToRomanNumerals(13);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "XIV", when receive "14"`, () => {
    // Arrange
    const expectedResult = "XIV";

    // Act
    const actualResult: string = convertToRomanNumerals(14);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "XV", when receive "15"`, () => {
    // Arrange
    const expectedResult = "XV";

    // Act
    const actualResult: string = convertToRomanNumerals(15);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });

  it(`it should return "XIX", when receive "19"`, () => {
    // Arrange
    const expectedResult = "XIX";

    // Act
    const actualResult: string = convertToRomanNumerals(19);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });
});
