function convertToRomanNumerals(arabicNumber: number) {
  let resultRomanNumber = "";
  let roundToRepeatRomanNumberOne = arabicNumber;

  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";

  if (arabicNumber === 4) return "IV";
  if (arabicNumber === 9) return "IX";
  if (arabicNumber === 10) return "X";

  if (arabicNumber >= 5) {
    roundToRepeatRomanNumberOne = arabicNumber - 5;
    resultRomanNumber = romanNumberFive;
  }

  const repeatedOneRomanNumbers = romanNumberOne.repeat(
    roundToRepeatRomanNumberOne
  );
  return resultRomanNumber + repeatedOneRomanNumbers;
}

export default convertToRomanNumerals;
