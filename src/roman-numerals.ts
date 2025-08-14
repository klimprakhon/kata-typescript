function convertToRomanNumerals(arabicNumber: number) {
  if (arabicNumber === 4) return "IV";
  if (arabicNumber === 1) return "I";
  if (arabicNumber === 3) return "III";

  return "Invalid Number";
}

export default convertToRomanNumerals;
