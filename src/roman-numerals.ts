function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumerals = new Map<number, string>([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  for (const [arabicValue, romanNumber] of romanNumerals) {
    while (remainValue >= arabicValue) {
      resultRomanNumber += romanNumber;
      remainValue -= arabicValue;
    }
  }

  return resultRomanNumber;
}

export default convertToRomanNumerals;
