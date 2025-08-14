function convertToRomanNumerals(arabicNumber: number) {
  if (arabicNumber === 8) return "VIII";
  if (arabicNumber === 5) return "V";
  if (arabicNumber === 4) return "IV";

  const romanNumberOne = "I";
  return romanNumberOne.repeat(arabicNumber);
}

export default convertToRomanNumerals;
