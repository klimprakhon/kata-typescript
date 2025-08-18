function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";
  const romanNumberTen: string = "X";

  if (remainValue >= 10) {
    remainValue -= 10;
    resultRomanNumber += romanNumberTen;
  }

  if (remainValue === 9) {
    remainValue -= 9;
    resultRomanNumber += "IX";
  }

  if (remainValue >= 5) {
    remainValue -= 5;
    resultRomanNumber += romanNumberFive;
  }

  if (remainValue === 4) {
    remainValue -= 4;
    resultRomanNumber += "IV";
  }

  const repeatedOneRomanNumbers = romanNumberOne.repeat(remainValue);
  return resultRomanNumber + repeatedOneRomanNumbers;
}

export default convertToRomanNumerals;
