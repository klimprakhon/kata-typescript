function convertToRomanNumerals(arabicNumber: number) {
  let remainValue = arabicNumber;
  let resultRomanNumber = "";

  const romanNumberOne: string = "I";
  const romanNumberFive: string = "V";
  const romanNumberTen: string = "X";

  while (remainValue >= 10) {
    resultRomanNumber += romanNumberTen;
    remainValue -= 10;
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

  while (remainValue > 0) {
    const repeatedOneRomanNumbers = romanNumberOne.repeat(remainValue);
    resultRomanNumber += repeatedOneRomanNumbers;
    remainValue -= remainValue;
  }

  return resultRomanNumber;
}

export default convertToRomanNumerals;
