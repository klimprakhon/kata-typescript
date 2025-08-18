function convertToRomanNumerals(arabicNumber: number) {
  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";

  if (arabicNumber === 4) return "IV";
  if (arabicNumber === 9) return "IX";

  if (arabicNumber >= 5) {
    const roundToRepeat = arabicNumber - 5;
    const repeatedOneRomanNumbers = romanNumberOne.repeat(roundToRepeat);
    return romanNumberFive + repeatedOneRomanNumbers;
  }

  return romanNumberOne.repeat(arabicNumber);
}

export default convertToRomanNumerals;
