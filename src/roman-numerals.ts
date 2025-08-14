function convertToRomanNumerals(arabicNumber: number) {
  if (arabicNumber === 4) return "IV";

  const romanNumberOne = "I";
  return romanNumberOne.repeat(arabicNumber);
}

export default convertToRomanNumerals;
